const express = require('express');
const router = express.Router();
const Activity = require("../model/actModel");
const reqAuth = require('../middlewares/reqAuth');
const database = require('../db/database');
const { response } = require('express');

router.use(reqAuth)
router.post("/createActivity",async (req, res) => {
    if (req.body.activityname == "" || req.body.activityname.length > 32){
        return res.send({
            status:400,
            message:"Please provide activity name."
        })
    }
    if (req.body.location =="" || req.body.location.length > 32 ){
        return res.send({
            status:400,
            message:"Please provide location."
        })
    }
    if (req.body.subject ==""){
        return res.send({
            status:400,
            message:"Please provide subject."
        })
    }
    let data = new Activity({
        activityname:req.body.activityname,
        location:req.body.location,
        subject:req.body.subject,
        date:req.body.date,
        price:req.body.price,
    })
    if (req.body.price > 10 ){
        return res.send({
            status:400,
            message:"Your price is over 10."
        })
    }else{
        data.save()
        return res.send({
            status:200,
            message:"Done."
        })
    }
  });
module.exports = router;

