const express = require('express');
const router = express.Router();
const Reward = require("../model/rewardOwner");
const reqAuth = require('../middlewares/reqAuth');
const checkin = require('./checkin');

router.use(reqAuth)
router.get("/showRewardById",async (req, res) => {

    Reward.find({
        studentid:`${req.user.studentid}`
    }).then((ret) => {
            return res.send(ret)
    })
  });
module.exports = router;

