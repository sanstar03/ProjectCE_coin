
const express = require("express");
const router = express.Router();
const Actmodel = require("../model/actModel");
const reqAuth = require("../middlewares/reqAuth");

router.use(reqAuth);
router.post("/deleteActivity", async (req, res) => {
            Actmodel.find({
                activityname:req.body.activityname,
                subject:req.body.subject,
                location:req.body.location,
                price:req.body.price,
                date:req.body.date
            }).then(ret => {
                if(ret.length == 0){
                    return res.send({
                        status:400,
                        message:"Already delete."
                    })
                }else{
                    Actmodel.deleteOne({
                        activityname:req.body.activityname,
                        subject:req.body.subject,
                        location:req.body.location,
                        price:req.body.price,
                        date:req.body.date
                    },{ useFindAndModify: false }).catch(e => {
                        console.log(e.message)
                    })
                    return res.send({
                        status:200,
                        message:"Delete finish"
                    })
                }
                   
            })
});

module.exports = router;
