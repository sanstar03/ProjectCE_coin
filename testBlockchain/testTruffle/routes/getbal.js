const express = require('express');

const router = express.Router();
const reqAuth = require('../middlewares/reqAuth');
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
const { abi, contract_address } = require("../abi");
const mfk = new web3.eth.Contract(abi, contract_address);

router.use(reqAuth)
router.get("/getBalance",async (req, res) => {
    mfk.methods
    .balanceOf(`${req.user.address}`)
    .call()
    .then((bal) => {
    let nissan = web3.eth.getBalance(`${req.user.address}`)  
    console.log(nissan)
    res.send(bal)});
  });

module.exports = router;

