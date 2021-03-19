const express = require('express');
const userModel = require('../model/userModel');
const router = express.Router();
const Model = require("../model/subjectModel");
const reqAuth = require('../middlewares/reqAuth');

router.use(reqAuth)
router.get("/getSubjectByTeacher",async (req, res) => {

  await Model.find({ teacher: `${req.user.firstname}` }).then((ret) => {
    return res.send(ret);
  });
  });

module.exports = router;

