const express = require('express');
const router = express.Router();
const Reward = require("../model/rewardModel");
const reqAuth = require('../middlewares/reqAuth');
const checkin = require('./checkin');

router.use(reqAuth)
router.post("/createReward",async (req, res) => {
    let data = new Reward({
        rewardname:req.body.rewardname,
        imgsrc:req.body.imgsrc,
        price:req.body.price,
        rewardleft:req.body.rewardleft
    })
    data.save().catch(e => {
        return res.send({
            status:400,
            message:e.message
        })
    })

    // await Reward.findOneAndUpdate({
    //     rewardname:req.body.rewardname
    // },
    // { $push: { owner: req.body.owner } },
    // { useFindAndModify: false }
    // ).catch(e => {
    //     return res.send({
    //         status:400,
    //         message:e.message
    //     })
    // })

    return res.send({
        status:200,
        message:"Done."
    })


  
  });
  
  

module.exports = router;

