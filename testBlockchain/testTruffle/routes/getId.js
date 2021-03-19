const express = require('express');
const userModel = require('../model/userModel');
const router = express.Router();
const Model = require("../model/subjectModel");
const reqAuth = require('../middlewares/reqAuth');
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
const { abi, contract_address } = require("../abi");
const mfk = new web3.eth.Contract(abi, contract_address);


router.use(reqAuth)

router.get("/getId",async (req, res) => {
    try {
        return res.send(`${req.user.studentid}`);
      } catch (e) {
        return res.send(e);
      }
      
  });

module.exports = router;

