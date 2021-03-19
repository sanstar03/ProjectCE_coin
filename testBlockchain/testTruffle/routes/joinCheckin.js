const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
const { abi, contract_address } = require("../abi");
const mfk = new web3.eth.Contract(abi, contract_address);
const express = require("express");
const router = express.Router();
const Checkin = require("../model/CheckinModel");
const reqAuth = require("../middlewares/reqAuth");

router.use(reqAuth);
router.post("/joinCheckin", async (req, res) => {
  Checkin.find({
    memberId: `${req.user.studentid}`,
    code: req.body.code,
  }).then(async (ret) => {
    if (ret == 0) {
      let cbaddress = "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73";
      try {
        const temp = mfk.methods.transfer(`${req.user.address}`, 1);
        let encodeABI = temp.encodeABI();
        temp.estimateGas().then((gas) => {
          web3.eth.getBalance(cbaddress).then((ret) => {
            if (ret < gas) {
              res.json({
                message: "gas is not enough",
              });
            }
            web3.eth.getTransactionCount(cbaddress).then((ret) => {
              var Txob = {
                nonce: web3.utils.numberToHex(ret), //nonce_round.toString() 116787000000
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
      } catch (e) {
        return res.send({
          status: 400,
          message: "Can't get a coin",
        });
      }
      await Checkin.findOneAndUpdate(
        {
          code: req.body.code,
        },
        { $push: { memberId: `${req.user.studentid}` } },
        { useFindAndModify: false }
      );
      return res.send({
        status: 200,
        message: "Checkin Done.",
      });
    } else {
      return res.send({
        status: 400,
        message: "You already checkin.",
      });
    }
  });
});

module.exports = router;
