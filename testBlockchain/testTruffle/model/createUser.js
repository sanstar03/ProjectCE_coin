const userModel = require("../model/userModel");
const crypto = require('../cryptography1');
const Tx = require('ethereumjs-tx');

module.exports = ({ router, web3 }) => {
    router.post('/createUser', async (req, res) => {
        let _account = web3.eth.accounts.create();
        let encryptedPrivateKey = crypto.encrypt(_account.privateKey, req.body.password);
        let nissan = crypto.decrypt(encryptedPrivateKey,req.body.password)
        let userData = await new userModel({
            username: req.body.username,
            address: _account.address,
            privateKey: JSON.stringify(encryptedPrivateKey)
        });

        await userData.save().then(doc => {
            //console.log(doc);
            //web3.eth.sendTransaction({from: acct1, to:acct2, value: web3.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000});
            try {
                web3.eth.getTransactionCount("0x1b9e3f43015718e0ba404c7c0516f58f9259a8e4").then(ret => {
                    //console.log(ret)
                    const rawTx = {
                        nonce: web3.utils.numberToHex(ret),             // Replace by nonce for your account on geth node
                        gasPrice: web3.utils.numberToHex(web3.utils.toWei('10', 'gwei')),   // maximum price of gas you are willing to pay for this transaction
                        gasLimit: web3.utils.numberToHex(21000),      // maximum gas you are willing to pay for this transaction
                        to: _account.address,
                        value: web3.utils.numberToHex(web3.utils.toWei('1', 'ether')),
                    };
                    let privateKey = Buffer.from("A54AE1CD9DFA726090EBAA2A86725A0A5DF16DFF60190B86147A2250A2803F67", 'hex');
                    let tx = new Tx(rawTx);
                    tx.sign(privateKey)
                    let serializedTx = tx.serialize();
                    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                        .on('receipt', console.log)
                })

            } catch (e) {
                res.json({
                    status: 400,
                    message: "Cannot send eth"
                })
                return;
            }
            res.send({
                status: 200,
                message: "Success",
                address: _account.address
            }).then(console.log(_account.privateKey));
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
                    message: err.message
                })
            }
        });

    });
}