const express = require('express');
const router = express.Router();
const ActModel = require('../model/actModel')
const reqAuth = require('../middlewares/reqAuth');

router.use(reqAuth)
router.post("/getActivity",async (req, res) => {
    console.log(req.body.subject)
  await ActModel.find({ subject:req.body.subject }).then((ret) => {
    return res.send(ret);
  });
  });
module.exports = router;

