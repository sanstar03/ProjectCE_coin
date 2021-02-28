const userModel = require("../model/userModel");
const crypto = require('../routes/cryptography1');
const Tx = require('ethereumjs-tx');
const jwt = require('jsonwebtoken');

module.exports = ({ router, web3 }) => {
    router.post('/createUser', async (req, res) => {
        let _account = web3.eth.accounts.create();
        let PrirateKey = "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63"
        let encryptedPrivateKey = crypto.encrypt(_account.privateKey, req.body.password);
        // let nissan = crypto.decrypt(encryptedPrivateKey,req.body.password)
        let user = await new userModel({
            username: req.body.username,
            address: _account.address,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            studentid:req.body.studentid,
            privateKey: JSON.stringify(encryptedPrivateKey)
        });

        
        


        
        await user.save().then(doc => {
            const token = jwt.sign({userID:user._id},process.env.TOKEN_SECRET);
            console.log(token)
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
                address: _account.address,
                token:token
            })
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
}