const express = require('express');

const router = express.Router();

const reqAuth = require('../middlewares/reqAuth');

router.use(reqAuth)

router.get("/getUser",async (req, res) => {
        let user = `${req.user.firstname}`+" "+`${req.user.lastname}`
        res.send(user)
  });

module.exports = router;

