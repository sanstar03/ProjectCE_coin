const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");
const app = express();
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
const { abi, contract_address } = require("./abi");
const jwt = require("jsonwebtoken");
const mfk = new web3.eth.Contract(abi, contract_address);
const Tx = require("ethereumjs-tx");
// const authroute = require('./routes/auth');
const dotenv = require("dotenv");
const reqAuth = require("./middlewares/reqAuth");
const Subject = require("./model/subjectModel");
const actModel = require("./model/activityModel");
dotenv.config();
app.use(cors());
require("./db/database");
app.use("/api", bodyParser.json(), router);
app.use("/api", bodyParser.urlencoded({ extended: false }), router);

require("./routes/createUser")({ router, web3 });
require("./routes/transfer")({ router });
require("./routes/checkin")({ router });
require("./routes/SubjectCreate")({ router });
require("./routes/SubjectUpdate")({ router });
// require('./routes/joinActivity')({router});

// require('./routes/getSubject')({router});

const User = require("./model/userModel");
// const Teacher = require('./model/teacher')
// const loginValidation = require ('./validation')

const crypto = require("./routes/cryptography1");
const { Model } = require("mongoose");
const { array } = require("@hapi/joi");

router.route("/login").post(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).send(err, "Must provide username and password");
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).send({ error: "user not found" });
  }
  try {
    let decryptedPrivateKey = crypto.decrypt(
      JSON.parse(user.privateKey),
      req.body.password
    );
    decryptedPrivateKey = decryptedPrivateKey.substring(
      2,
      decryptedPrivateKey.length
    );
    // const token = jwt.sign({userId:user._id},'kpkjriosjdjkvndjsia');
    // res.send(token);
    const token = jwt.sign({ userId: user._id }, "kpkjriosjdjkvndjsia");
    res.send({ token });
  } catch (e) {
    return res.status(422).send({ error: "Invalid password ." });
  }
});
// Transfer is here

router.route("/transfer").post( (req, res) => {
  let address = `${req.user.address}`;
  let pkey = `${req.user.privateKey}`;
  //   console.log(name + " " + pkey )
  User.findOne({
    studentid: req.body.reciever,
  }).then((rec) => {
    console.log(address);
    //   console.log(pkey)
    console.log(rec.address);
    let dePrivatekey;
    try {
      dePrivatekey = crypto.decrypt(JSON.parse(pkey), req.body.password);
      dePrivatekey = dePrivatekey.substring(2, dePrivatekey.length);

      dePrivatekey = "0x" + dePrivatekey;
    } catch (e) {
      res.send({
        status: 400,
        message: "Password is Wrong ."
      });
    }

    //

    try {
      mfk.methods
        .balanceOf(address)
        .call()
        .then((ret) => {
          if (ret < req.body.amount) {
            res.send({
              status: 400,
              message: "Not enogh coin.",
            });
          } else if (req.body.amount === 0) {
            res.send({
              status: 400,
              message: "Invalid amount.",
            });
          }
        });
      const create_tran = mfk.methods.transfer(rec.address, req.body.amount);
      let encoded_ABI = create_tran.encodeABI();
      create_tran.estimateGas().then((gas) => {
        web3.eth.getBalance(address).then((bal) => {
          if (bal < gas) {
            res.send({
              status: 400,
              message: "Not enough gas",
            });
          }
        });
        web3.eth.getTransactionCount(address).then((ret) => {
          var rawTx = {
            nonce: web3.utils.numberToHex(ret), //nonce_round.toString() 116787000000
            gasPrice: web3.utils.numberToHex(gas), //GAS.toString()
            gasLimit: "0x2DC6C0",
            to: contract_address.toString(),
            value: "0x00",
            data: encoded_ABI.toString(),
          };

          let privateKey = Buffer.from(dePrivatekey.substring(2, 66), "hex");
          let tx = new Tx(rawTx);
          tx.sign(privateKey);
          let serializedTx = tx.serialize();

          web3.eth
            .sendSignedTransaction("0x" + serializedTx.toString("hex"))
            .catch((e) => {
              res.json({
                status: 400,
              });
            });
          res.json({
            status: 200,
            message: "transfer success",
            amount: req.body.amount,
            destination: rec.address,
          });
        });
      });
    } catch (e) {
      ///// try tag

      res.send({
        status: 400,
        message: "invalid transfer.",
      });
    }
  });
});
// Activity
router.route("/activityDelete").post( async (req, res) => {
  actModel
    .findOneAndDelete({
      teacher: `${req.user.firstname} ${req.user.lastname}`,
      name: req.body.name,
      subject: req.body.subject,
    })
    .then((ret) => {
      if (ret == null) {
        res.send({
          status: 400,
          message: "Cant find activity.",
        });
      } else {
        res.send({
          status: 200,
          message: "Delete success.",
        });
      }
    });
});

router.route("/activityCreate").post( async (req, res) => {
  Subject.find({
    subject: req.body.subject,
  }).then((sub) => {
    if (sub.length == 0) {
      res.send({
        status: 400,
        message: "Subject not found.",
      });
    } else {
      mfk.methods
        .balanceOf(`${req.user.address}`)
        .call()
        .then(async (ret) => {
          if (ret <= req.body.price) {
            res.send({
              status: 400,
              message: "Not enough coin",
            });
          } else {
            let object = await new actModel({
              subject: req.body.subject,
              teacher: `${req.user.firstname} ${req.user.lastname}`,
              name: req.body.name,
              acttype: req.body.acttype,
              price: req.body.price,
            });
            try {
              actModel
                .find({
                  name: req.body.name,
                  subject: req.body.subject,
                  teacher: `${req.user.firstname} ${req.user.lastname}`,
                })
                .then(async (ret) => {
                  if (ret.length == 0) {
                    console.log(ret);
                    await object.save().then(() => {
                      res.send({
                        status: 200,
                        message: "Success.",
                      });
                    });
                  } else {
                    res.send({
                      status: 400,
                      message: "Dulplicate activity .",
                    });
                  }
                });

              // await object.save()
              // res.send({
              //   status:200,
              //   message:"Success."
              // })
            } catch (e) {
              res.send({
                status: 400,
                message: "Something went wrong.",
              });
            }
          }
        });
    }
  });
});

router.route("/activityJoin").post( async (req, res) => {
  // let id = `${req.user.studentid}`;
  // await actModel.find({
  //   teacher: req.body.teacher,
  //   name: req.body.name,
  //   subject: req.body.subject,
  //   memberId:id
  // }).then(async ret => {
  //   if (ret.length != 0){
  //     return res.send({
  //       status:400,
  //       message:"Already Joined"
  //     })
  //   } 
  // })
  try{
    await actModel
    .findOneAndUpdate(
      {
        teacher: req.body.teacher,
        name: req.body.name,
        subject: req.body.subject,
      },
      { $push: { memberId: id } },
      { useFindAndModify: false }
    )
  }catch(e){
    res.send("I dont feel so good.")
  }
});

router.route("/activityJoincheck").get(async (req,res) => {
    let id = `${req.user.studentid}`;
  await actModel.find({
    teacher: req.body.teacher,
    name: req.body.name,
    subject: req.body.subject,
    memberId:id
  }).then(async ret => {
    if (ret.length != 0){
      return res.send({
        status:400,
        message:"Already Joined"
      })
    } 
  })

});

router.route("/getActivitybyid").get(async (req,res) => {
  let name = `${req.user.studentid}`;
  console.log(name);
  await actModel.find({ memberId: name }).then((ret) => {
    return res.send(ret);
  });

})

router.route("/joinSubject").post( reqAuth,async (req, res) => {
  
  await Subject.findOneAndUpdate(
    {
      subjectId: req.body.subjectId,
    },
    { $push: { memberId: `${req.user.studentid}` } },
    { useFindAndModify: false }
  ).catch((e) => {
    res.send({
      status:400,
      message:"Sunject not found."
    });
  });
  return res.send({
    status: 200,
    message: "Success !!",
  });
});

// Activity
router.route("/getSubjectbyid").get(reqAuth, async (req, res) => {
  let name = `${req.user.studentid}`;
  console.log(name);
  await Subject.find({ memberId: name }).then((ret) => {
    return res.send(ret);
  });
});

router.route("/getUser").get( (req, res) => {
  try {
    res.send(`HELLO! ${req.user.firstname}`);
  } catch (e) {
    res.send(e);
  }
});

router.route("/getId").get( (req, res) => {
  try {
    res.send(`${req.user.studentid}`);
  } catch (e) {
    res.send(e);
  }
  }
);
router.route("/getRole").get( (req, res) => {
  try {
    res.send(`${req.user.role}`);
  } catch (e) {
    res.send({
      status: 400,
      message: "Something went wrong",
    });
  }
});

router.route("/getSubject").get( async (req, res) => {
  let name = `${req.user.firstname}`;
  console.log(name);
  await Subject.find({ teacher: name }).then((ret) => {
    return res.send(ret);
  });
});
router.route("/getBalance").get(reqAuth, (req, res) => {
  mfk.methods
    .balanceOf(`${req.user.address}`)
    .call()
    .then((bal) => res.send(bal));
});
router.route("/balanceTest").get((req, res) => {
  // console.log(mfk)
  mfk.methods
    .balanceOf(req.body.address)
    .call()
    .then((bal) => res.send(bal));
});
router.route("/getAddressbyid").get((req, res) => {
  // console.log(mfk)
  User.find({ studentid: req.body.studentid }).then((ret) => {
    console.log(ret[0].address);
  });
});



module.exports = router;
app.get('/',reqAuth,(req,res) => {
  res.send("Hello world !!")
  // res.send({
  //   username:`${req.user.username}`
  //   ,address:`${req.user.address}`}
  // )
})
app.use("*", (req, res) => res.status(404).send("404 Not found"));
app.listen(8000, () => console.log("Server is running 8000"));
