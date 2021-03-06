const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require("../model/userModel");
// const reqAuth = require()
const dotenv = require('dotenv')
dotenv.config();
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === 'Bearer laksjdflaksdjasdfklj'

  if (!authorization) {
    console.log(err.message)
    return res.status(401).send({ error: 'You must be logged in.' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token,'kpkjriosjdjkvndjsia', async (err, payload) => {
    if (err) {
      console.log(err.message)
      return res.status(401).send({ error: 'You must be logged in.' });
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};