const express = require('express');
const router = express.Router();
const reqAuth = require('../middlewares/reqAuth')

router.use(reqAuth)

router.get("/getRole",async (req, res) => {
    try {
        return res.send(`${req.user.role}`);
      } catch (e) {
        return res.send({
          status: 400,
          message: "Something went wrong",
        });
      }
  });
module.exports = router;

