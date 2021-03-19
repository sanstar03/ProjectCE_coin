const crypto = require("../routes/cryptography1");
const Tx = require("ethereumjs-tx");
const jwt = require("jsonwebtoken");
const reqAuth = require("../middlewares/reqAuth");
const Model = require("../model/subjectModel");
const { model } = require("../model/subjectModel");
module.exports = ({ router }) => {
  router.get("/updateSubject", async (req, res) => {
    await Model.findOneAndUpdate(
      {
        subject: req.body.subject,
      },
      { $push: { teacher: req.body.teachername } },
      { useFindAndModify: false }
    ).catch((e) => {
      console.log(e.message);
    });
  });
};
