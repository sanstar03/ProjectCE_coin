const express = require("express");
const User = require("../model/userModel");
const router = express.Router();
const reqAuth = require("../middlewares/reqAuth");
const crypto = require('../routes/cryptography1')
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
const { abi, contract_address } = require("../abi");
const mfk = new web3.eth.Contract(abi, contract_address);
const Tx = require('ethereumjs-tx');


router.use(reqAuth);

router.post("/transfer", async (req, res) => {
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
       return res.send({
        message: "Password is Wrong .",
      });
    } 
    try {
      mfk.methods
        .balanceOf(address)
        .call().then(async ret => {
          if (ret < req.body.amount) {
            return res.send({
             message: "Not enogh coin.",
           })}
           else if (req.body.amount <= 0){
             return res.send({
               message:"invalid amount"
             })
           }
        })
      }catch(e){
        return res.send({
          message:e.message
        })
      }
      try{
      const create_tran = mfk.methods.transfer(rec.address, req.body.amount);
      let encoded_ABI = create_tran.encodeABI();
      create_tran.estimateGas().then((gas)=>{
        web3.eth.getTransactionCount(address).then(ret =>{
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
      web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
  })

      })
      return res.send({
        message:"Finished"
      })
    }catch(e){
      return res.send({
        status:400,
        message:"Some thing went wrong"
      })
    }
    //   create_tran.estimateGas().then((gas) => {
    //     web3.eth.getBalance(address).then((bal) => {
    //       if (bal < gas) {
    //          return res.send({
    //           message: "Not enough gas"
    //         });
    //       }
    //     });
    //     web3.eth.getTransactionCount(address).then((ret) => {
    //       var rawTx = {
    //         nonce: web3.utils.numberToHex(ret), //nonce_round.toString() 116787000000
    //         gasPrice: web3.utils.numberToHex(gas), //GAS.toString()
    //         gasLimit: "0x2DC6C0",
    //         to: contract_address.toString(),
    //         value: "0x00",
    //         data: encoded_ABI.toString(),
    //       };
          
    //       let privateKey = Buffer.from(dePrivatekey.substring(2, 66), "hex");
    //       let tx = new Tx(rawTx);
    //       tx.sign(privateKey);
    //       let serializedTx = tx.serialize();

    //       web3.eth
    //         .sendSignedTransaction("0x" + serializedTx.toString("hex"))
    //         .catch((e) => {
    //            return res.send({
    //             message:"Kuy"
    //           });
    //         });
    //        return res.send({
    //         message: "transfer success",
    //         amount: req.body.amount,
    //         destination: rec.address,
      
        // .then((ret) => {
          
            
        //   } else if (req.body.amount === 0) {
        //      return res.send({
        //       message: "Invalid amount.",
        //     });
        //   }
    //     }).catch(e => {
    //       return res.send(e.message)
    //     })
    //     if(invalid === true){                                                                                                   
    //   }
    //   const create_tran = mfk.methods.transfer(rec.address, req.body.amount);
    //   let encoded_ABI = create_tran.encodeABI();
    //   create_tran.estimateGas().then((gas) => {
    //     web3.eth.getBalance(address).then((bal) => {
    //       if (bal < gas) {
    //          return res.send({
    //           message: "Not enough gas"
    //         });
    //       }
    //     });
    //     web3.eth.getTransactionCount(address).then((ret) => {
    //       var rawTx = {
    //         nonce: web3.utils.numberToHex(ret), //nonce_round.toString() 116787000000
    //         gasPrice: web3.utils.numberToHex(gas), //GAS.toString()
    //         gasLimit: "0x2DC6C0",
    //         to: contract_address.toString(),
    //         value: "0x00",
    //         data: encoded_ABI.toString(),
    //       };
          
    //       let privateKey = Buffer.from(dePrivatekey.substring(2, 66), "hex");
    //       let tx = new Tx(rawTx);
    //       tx.sign(privateKey);
    //       let serializedTx = tx.serialize();

    //       web3.eth
    //         .sendSignedTransaction("0x" + serializedTx.toString("hex"))
    //         .catch((e) => {
    //            return res.send({
    //             message:"Kuy"
    //           });
    //         });
    //        return res.send({
    //         message: "transfer success",
    //         amount: req.body.amount,
    //         destination: rec.address,
    //       });
    //     });
    //   });
    // } catch (e) {
    //    return res.send({
    //     message: "invalid transfer."
    //   });
    // }
  });
});
module.exports = router;
