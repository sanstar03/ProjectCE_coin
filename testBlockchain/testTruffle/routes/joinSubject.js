const express = require('express');
const router = express.Router();
const Subject = require("../model/subjectModel");
const reqAuth = require('../middlewares/reqAuth');

router.use(reqAuth)
router.post("/joinSubject",async (req, res) => {
    await Subject.findOneAndUpdate(
        {
          subjectId: req.body.subjectId,
        },
        { $push: { memberId: `${req.user.studentid}` } },
        { useFindAndModify: false }
      ).catch((e) => {
        return res.send({
          status:400,
          message:"Subject not found."
        });
      });
      return res.send({
        status: 200,
        message: "Success !!",
      });
  });

module.exports = router;

