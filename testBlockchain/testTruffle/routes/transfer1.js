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
const abiDecoder = require('abi-decoder');
const testABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_total",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSymbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDecimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "remaining",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];


router.use(reqAuth);

router.post("/transfer", async (req, res) => {

  
  abiDecoder.addABI(testABI);
  let address = `${req.user.address}`;
  
  let pkey = `${req.user.privateKey}`;
  console.log('address is ' + address)
  //   console.log(name + " " + pkey )
  User.find({
    studentid: req.body.reciever,
  }).then((rec) => {

    if (rec.length != 0){
    console.log(address);
    //   console.log(pkey)
    console.log(rec[0].address);
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
      
      try{
      

      
      const create_tran = mfk.methods.transfer(rec[0].address, req.body.amount);
      let encoded_ABI = create_tran.encodeABI();
      console.log(encoded_ABI.toString())
      const decodedData = abiDecoder.decodeMethod(encoded_ABI.toString());
      console.log(decodedData)
      create_tran.estimateGas().then((gas)=>{

        web3.eth.getTransactionCount(address).then(ret =>{

          web3.eth.getBalance(address).then(ret => {
            //console.log(ret)
            if (ret < gas) {
                return res.json({
                    message: "Not enough eth"
                })
            }
        })
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
    }catch(e){
      return res.send({
        
        message:"Some thing went wrong"
      })
    }
    
    return res.send({
      status:200,
      message:"Finished."
    })
  }else{
    return res.send({
      message:"User not found"
    })
  }
  });
});
module.exports = router;
