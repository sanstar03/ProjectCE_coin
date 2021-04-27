const express = require('express');
const router = express.Router();
const Reward = require("../model/rewardModel");
const reqAuth = require('../middlewares/reqAuth');
const checkin = require('./checkin');

router.use(reqAuth)
router.get("/showReward",async (req, res) => {
    Reward.find().then(ret => {
        console.log(ret)
        return res.send(ret)
    })
  
  });
  
  

module.exports = router;

