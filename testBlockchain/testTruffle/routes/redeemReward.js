const express = require('express');
const router = express.Router();
const Reward = require("../model/rewardModel");


const Owner = require("../model/rewardOwner")
const reqAuth = require('../middlewares/reqAuth');
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
const { abi, contract_address } = require("../abi");
const mfk = new web3.eth.Contract(abi, contract_address);
const crypto = require('../routes/cryptography1')
const Tx = require('ethereumjs-tx');

router.use(reqAuth)
router.post("/redeemReward",async (req, res) => {
    
    Reward.find({
        rewardname:req.body.rewardname
    }).then(async ret => {
        console.log(ret)
        if (ret[0].rewardleft == 0){
            return res.send({
                status:400,
                message:"Reward out of stock."
            })
        }
        mfk.methods
    .balanceOf(`${req.user.address}`)
    .call()
    .then(async (bal) => {
        if (bal < ret[0].price){
            return res.send({
                status:400,
                message:"Not enough coin."
            })
        }
        else{
            let pkey = `${req.user.privateKey}`
            try {
                dePrivatekey = crypto.decrypt(JSON.parse(pkey), req.body.password);
                dePrivatekey = dePrivatekey.substring(2, dePrivatekey.length);
                dePrivatekey = "0x" + dePrivatekey;

              } catch (e) {
                 return res.send({
                  message:"Password is wrong."
                });
              } 

            try{    
                const create_tran = mfk.methods.transfer("0x02b6B3414000f5AF82eaf97C52a09AFF26754225", ret[0].price);
                let encoded_ABI = create_tran.encodeABI();
                create_tran.estimateGas().then(async (gas)=>{
                  web3.eth.getTransactionCount(`${req.user.address}`).then(rep =>{
                    var rawTx = {
                  nonce: web3.utils.numberToHex(rep), //nonce_round.toString() 116787000000
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
                web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
            })
                })

                try{
                    await Reward.findOneAndUpdate(
                        { 
                          rewardname:req.body.rewardname
                        },
                        { $push: { owner: `${req.user.studentid}` } },
                        { useFindAndModify: false }
                      );
                }catch(e){
                    return res.send({
                        status:400,
                        message:"Please contact Admin."
                    })
                }

                try{
                    let left = ret[0].rewardleft
                    left = left -= 1 
                    await Reward.findOneAndUpdate(
                        { 
                          rewardname:req.body.rewardname
                        },
                        { rewardleft:left},
                        { useFindAndModify: false }
                      );
                }catch(e){
                    return res.send({
                        status:400,
                        message:"Please contact Admin."
                    })
                }

                try{
                  let data = new Owner({
                    studentid:`${req.user.studentid}`,
                    reward:req.body.rewardname,
                    imgsrc:ret[0].imgsrc,
                    price:ret[0].price
                  })
                  data.save()
              }catch(e){
                  return res.send({
                      status:400,
                      message:"Please contact Admin."
                  })
                }


                return res.send({
                  message:"Finished"
                })
              }catch(e){
                return res.send({
                  status:400,
                  message:"Some thing went wrong"
                })
              }



            // return res.send({
            //     status:200,
            //     message:"Have enough coin"
            // })
        }
    });
    })
  });
  
  

module.exports = router;

