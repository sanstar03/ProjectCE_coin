const Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
const { abi, contract_address } = require("../abi");
const mfk = new web3.eth.Contract(abi, contract_address);
const express = require("express");
const router = express.Router();
const Checkin = require("../model/CheckinModel");
const reqAuth = require("../middlewares/reqAuth");

router.use(reqAuth);
router.post("/deleteCheckin", async (req, res) => {
            Checkin.find({
                subject:req.body.subject
            }).then(ret => {
                if(ret.length == 0){
                    return res.send({
                        status:400,
                        message:"Don't have checkin event."
                    })
                }else{
                    console.log(ret[0]._id)
                    Checkin.deleteOne({
                        code:ret[0].code
                    },{ useFindAndModify: false }).catch(e => {
                        console.log(e.message)
                    })
                    return res.send({
                        status:200,
                        message:"Checkin event deleted."
                    })
                }
            })
});

module.exports = router;
