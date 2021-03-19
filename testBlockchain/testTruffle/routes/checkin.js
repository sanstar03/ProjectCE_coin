
const Tx = require("ethereumjs-tx");
const User = require("../model/userModel");
const Web3 = require('web3')
const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:8545');
const { abi,contract_address} = require('../abi')
const mfk = new web3.eth.Contract(abi,contract_address);
const reqAuth = require('../middlewares/reqAuth')

module.exports = ({ router, contract_C }) => {
  router.route("/checkin").get(async (req, res) => {

    let cbaddress = "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73";
    try{
        const temp = mfk.methods.transfer(req.body.address,1);
        let encodeABI = temp.encodeABI();
        temp.estimateGas().then(gas => {
          web3.eth.getBalance(cbaddress).then(ret => {
            if(ret < gas){
              res.json({
                message:'gas is not enough'
              })
            }
            web3.eth.getTransactionCount(cbaddress).then(ret => {
              var Txob = {
                    nonce: web3.utils.numberToHex(ret), //nonce_round.toString() 116787000000
                    gasPrice: web3.utils.numberToHex(gas), //GAS.toString()
                    gasLimit: '0x2DC6C0',
                    to: contract_address.toString(),
                    value: '0x00',
                    data: encodeABI.toString()
              }
              
              let CBprivateKey ="0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";
              let privateKey = Buffer.from(CBprivateKey.substring(2,66), 'hex');
              // console.log(privateKey)
              let tx = new Tx(Txob);
              tx.sign(privateKey);
              let serializedTx = tx.serialize();
              web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
            });

          })
        })
        res.json({
          status:200,
          message:'Success'
        })
  }catch(e){
      console.log(e.message)
    }
    //   try{
        
        // //get transaction count 
        // web3.eth.getTransactionCount(req.body.address).then(ret => {
        //     var rawTx = {
        //         nonce: web3.utils.numberToHex(ret), //nonce_round.toString() 116787000000
        //         gasPrice: web3.utils.numberToHex(gas), //GAS.toString()
        //         gasLimit: '0x2DC6C0',
        //         to:contract_address.toString(),
        //         value: '0x00',
        //         data: encodeABI.toString()
        //     }
        //     let privateKey = Buffer.from(CBprivateKey, 'hex');
        //     let tx = new Tx(rawTx);
        //     tx.sign(privateKey);
        //     let serializedTx = tx.serialize();

        //     web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        //         .catch(e => {
        //             res.json({
        //                 status: 400
        //             })
        //         });
        //     res.json({
        //         status: 200,
        //         message: 'transfer success',
        //         amount: '1',
        //         destination: req.body.receiver
        //     })
        // })
      
  })};
    


