const express = require('express');
const router = express.Router();
const Special = require("../model/specialModel");
const reqAuth = require('../middlewares/reqAuth');
const checkin = require('./checkin');

router.use(reqAuth)
router.post("/createSpecial",async (req, res) => {
    let code = Math.floor(Math.random()*90000) + 10000;
    if(req.body.price == 0){
        return res.send({
            status:400,
            message:"Must provide price."
        })
    }
    let data = new Special({
        code:code,
        price:req.body.price
    })
    try{

        data.save()
        return res.send({
            status:200,
            message:"Done.",
            code:code
        })
    }
    catch(e){
        return res.send({
            status:400,
            message:"Can't generate code please try again"
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

