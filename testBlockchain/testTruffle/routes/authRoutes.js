const express = require('express');
const { model } = require('../model/userModel');
const router = express.Router();
const userModel = require('../model/userModel')
const web3 = require('../web3')
const crypto = require('../routes/cryptography1');
const Tx = require('ethereumjs-tx');
const jwt = require('jsonwebtoken');


router.post('/signup',async (req,res) => {
    let _account = web3.eth.accounts.create();
        let PrirateKey = "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63"
        let encryptedPrivateKey = crypto.encrypt(_account.privateKey, req.body.password);
        // let nissan = crypto.decrypt(encryptedPrivateKey,req.body.password)
        // const {username,}
        const user = await new userModel({
            username: req.body.username,
            address: _account.address,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            studentid:req.body.studentid,
            privateKey: JSON.stringify(encryptedPrivateKey)
        });
        const token = jwt.sign({userId:user._id},'kpkjriosjdjkvndjsia');
        await user.save().then(doc => {
            //console.log(doc);     
            //web3.eth.sendTransaction({from: acct1, to:acct2, value: web3.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000});
            try {
                    web3.eth.getTransactionCount("0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73").then(ret => {
                    const rawTx = {
                        nonce: web3.utils.numberToHex(ret),             // Replace by nonce for your account on geth node
                        gasPrice: web3.utils.numberToHex(web3.utils.toWei('10', 'gwei')),   // maximum price of gas you are willing to pay for this transaction
                        gasLimit: web3.utils.numberToHex(21000),      // maximum gas you are willing to pay for this transaction
                        to: _account.address,
                        value: web3.utils.numberToHex(web3.utils.toWei('1', 'ether')),
                    };
                    console.log(_account.privateKey)
                    let beforePrivate = "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";
                    let privateKey = Buffer.from(beforePrivate.substring(2,66), 'hex');
                    let tx = new Tx(rawTx);
                    tx.sign(privateKey)
                    let serializedTx = tx.serialize();
                    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                        .on('receipt', console.log)
                    res.send({token})
                })
                
            } catch (e) {
                res.json({
                    status: 400,
                    message: "Cannot send eth"
                })
                return;
            }
            
        }).catch(err => {
            console.log(err);
            if (err.code === 11000) {
                res.send({
                    status: 400,
                    message: "Duplicate Username"
                });
            }
            else {
                res.send({
                    status: 400,
                    message: err.message,
                    
                })
            }
        });

});

router.post('/signin',async (req,res) => {
    const { username, password } = req.body;
    console.log(username)
    console.log(password)
  if (!username || !password) {
    return res.status(422).send({error:"Must provide username and password"});
  }
  const user = await userModel.findOne({ username });
  if (!user) {
    return res.status(404).send({ error:"user not found" });
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

module.exports = router;