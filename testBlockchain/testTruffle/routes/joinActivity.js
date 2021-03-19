const reqAuth = require("../middlewares/reqAuth")
const Model = require("../model/subjectModel");
const Subject = require("../model/subjectModel");
module.exports = ({ router }) => {
  router.post("/joinSubject",reqAuth,async (req, res) => {
      console.log(`${req.body.studentId}`)
    await Subject.find(
        {
          subjectId: req.body.subjectId,
        },
        { $push: { memberId: `${req.body.studentId}` } },
        { useFindAndModify: false }
      ).catch((e) => {
        console.log(e.message);
      });
  });
};
