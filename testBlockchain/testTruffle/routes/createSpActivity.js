const express = require('express');
const router = express.Router();
const SpecialAct = require("../model/specialActivityModel");
const reqAuth = require('../middlewares/reqAuth');
const checkin = require('./checkin');

router.use(reqAuth)
router.post("/createSpecialActivity",async (req, res) => {
    let datesave = new Date(req.body.date[0],req.body.date[1],req.body.date[2],req.body.date[3],req.body.date[4],req.body.date[5])
    let timesave = new Date(req.body.time[0],req.body.time[1],req.body.time[2],req.body.time[3],req.body.time[4],req.body.time[5])
    let data = new SpecialAct({
        name:req.body.name,
        location:req.body.location,
        imgsrc:req.body.imgsrc,
        date:datesave,
        time:timesave,
        price:req.body.price,
        detail:req.body.detail
    })
    try{
        data.save()
        return res.send({
            status:200,
            message:"Done."
        })
    }
    catch(e){
        return res.send({
            status:400,
            message:e.message
        })
    }
    
   
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

    


  
  });
  
  

module.exports = router;

