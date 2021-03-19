const express = require('express');
const router = express.Router();
const Checkin = require("../model/CheckinModel");
const reqAuth = require('../middlewares/reqAuth');
const checkin = require('./checkin');

router.use(reqAuth)
router.post("/createCheckin",async (req, res) => {

  let code = Math.floor(Math.random()*90000) + 10000;
  console.log(code)
  let data = new Checkin({
    subject:req.body.subject,
    code:code
  })
  
  Checkin.find({
    subject: req.body.subject
  }).then(ret =>{
    console.log(ret)
    if (ret.length == 0){
      data.save().catch(e =>{
        console.log(e.message)
      })
      return res.send({
        status:200,
        message:"Code generated",
        code:code
      })
    }
    else{
      console.log(ret[0].code)
      return res.send({
        status:400,
        message:'Please close previous checkin code.',
        code:ret[0].code
      })
    }
    }
  )

  });
  
  

module.exports = router;

