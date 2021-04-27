const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
const { abi, contract_address } = require("../abi");
const mfk = new web3.eth.Contract(abi, contract_address);
const express = require("express");
const router = express.Router();
const Special = require("../model/specialModel");
const reqAuth = require("../middlewares/reqAuth");

router.use(reqAuth);
router.post("/joinSpecial", async (req, res) => {
  Special.find({
    code: req.body.code,
  }).then(async (ret) => {
    if (ret.length == 0) {
      return res.send({
        status: 400,
        message: "Invalid code.",
      });
    } else {
        let cbaddress = "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73";
      try {
        const temp = mfk.methods.transfer(`${req.user.address}`,ret[0].price);
        let encodeABI = temp.encodeABI();
        temp.estimateGas().then((gas) => {
          web3.eth.getBalance(cbaddress).then((retg) => {
            if (retg < gas) {
              res.json({
                message: "gas is not enough",
              });
            }
            web3.eth.getTransactionCount(cbaddress).then((retg) => {
              var Txob = {
                nonce: web3.utils.numberToHex(retg), //nonce_round.toString() 116787000000
                gasPrice: web3.utils.numberToHex(gas), //GAS.toString()
                gasLimit: "0x2DC6C0",
                to: contract_address.toString(),
                value: "0x00",
                data: encodeABI.toString(),
              };
              let CBprivateKey =
                "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";
              let privateKey = Buffer.from(
                CBprivateKey.substring(2, 66),
                "hex"
              );
              // console.log(privateKey)
              let tx = new Tx(Txob);
              tx.sign(privateKey);
              let serializedTx = tx.serialize();
              web3.eth.sendSignedTransaction(
                "0x" + serializedTx.toString("hex")
              );
            });
          });
          
        });
        Special.deleteOne({
            code:req.body.code
        },{ useFindAndModify: false }).catch(e => {
        })
        return res.send({
            status:200,
            message:"Finished."
        })
      } catch (e) {
        return res.send({
          status: 400,
          message: "Can't get a coin",
        });
      }
    }
  });
});

module.exports = router;
