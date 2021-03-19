const express = require('express');
const userModel = require('../model/userModel');
const router = express.Router();
const Model = require("../model/subjectModel");
const reqAuth = require('../middlewares/reqAuth');

router.use(reqAuth)
router.get("/getSubject",async (req, res) => {

  await Model.find({ memberId: `${req.user.studentid}` }).then((ret) => {
    return res.send(ret);
  });
  });

module.exports = router;

