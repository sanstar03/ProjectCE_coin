const Model = require("../model/subjectModel");
module.exports = ({ router }) => {
  router.get("/createSubject", async (req, res) => {
    let object = Model({
      subject: req.body.subject,
      subjectId: req.body.subjectId,
    //   $push:{teacher:req.body.teachername}
    });
    object.teacher.push(req.body.teachername)
    await object.save().then(res => {
        try{
            console.log(object) 
        }catch(e){
            console.log(e.message)
        }
    })
  });
};
