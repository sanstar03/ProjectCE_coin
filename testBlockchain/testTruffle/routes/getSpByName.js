const express = require('express');
const router = express.Router();
const Special = require("../model/specialActivityModel");
const reqAuth = require('../middlewares/reqAuth');
const checkin = require('./checkin');

router.use(reqAuth)
router.post("/showSpecialActivityByName",async (req, res) => {
    Special.findOne({name:req.body.name}).then(ret => {
        console.log(ret)
        return res.send(ret)
    })
  
  });
  
  

module.exports = router;

