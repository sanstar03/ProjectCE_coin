const express = require('express');

const router = express.Router();

const reqAuth = require('../middlewares/reqAuth');

router.use(reqAuth)
router.get("/getUser",async (req, res) => {
        res.send(`${req.user.firstname}`)
  });

module.exports = router;

