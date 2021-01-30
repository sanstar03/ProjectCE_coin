const crypto = require('./cryptography1');
const web3 = require('./web3')
const Tx = require('ethereumjs-tx');
const { abi, address } = require('./abi');
const userModel = require("./model/userModel");
module.exports = ({ router, contract }) => {
    router.route('/transfer')
        .post((req, res) => { //when you use post method you must use put method before to set value in rawTx
            userModel.find({
                address: req.body.address
            }).then(ret => {
                let decryptedPrivateKey;
                try {
                    decryptedPrivateKey = crypto.decrypt(JSON.parse(ret[0].privateKey), req.body.password);
                    decryptedPrivateKey = decryptedPrivateKey.substring(2, decryptedPrivateKey.length);
                } catch (e) {
                    res.json({
                        status: 400,
                        message: "Wrong password"
                    })
                }
                //Private key for sign transaction 
                //cut Ox
                let invalid = false;
                try {
                    contract[req.body.coin].methods.balanceOf(req.body.address).call().then(ret => {
                        if (ret < req.body.amount) {
                            res.json({
                                status: 400,
                                message: "Not enough token"
                            })
                            invalid = true;
                        }
                        else if (req.body.amount === 0) {
                            res.json({
                                status: 400,
                                message: "Invalid amount of token"
                            })
                        }
                    });
                    if(invalid === true){
                        return                                                                                                      
                    }
                    const tranfer_temp = contract[req.body.coin].methods.transfer(req.body.receiver, req.body.amount);//.estimateGas();
                    let encoded_ABI = tranfer_temp.encodeABI();
                    tranfer_temp.estimateGas().then(gas => {
                        web3.eth.getBalance(req.body.address).then(ret => {
                            //console.log(ret)
                            if (ret < gas) {
                                res.json({
                                    message: "Not enough eth"
                                })
                            }
                        })
                        //console.log(gas)
                        web3.eth.getTransactionCount(req.body.address).then(ret => {
                            var rawTx = {
                                nonce: web3.utils.numberToHex(ret), //nonce_round.toString() 116787000000
                                gasPrice: web3.utils.numberToHex(gas), //GAS.toString()
                                gasLimit: '0x2DC6C0',
                                to: address[req.body.coin].toString(),
                                value: '0x00',
                                data: encoded_ABI.toString()
                            }
                            let privateKey = Buffer.from(decryptedPrivateKey, 'hex');
                            let tx = new Tx(rawTx);
                            tx.sign(privateKey);
                            let serializedTx = tx.serialize();

                            web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                                .catch(e => {
                                    res.json({
                                        status: 400
                                    })
                                });
                            res.json({
                                status: 200,
                                message: 'transfer success',
                                amount: req.body.amount,
                                destination: req.body.receiver
                            })
                        })
                    })
                } catch (e) {
                    res.json({
                        status: 400,
                        message: "Invalid Transfer"
                    })
                }
                /////////////////////////////
            })
        })
}