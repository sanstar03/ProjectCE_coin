const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const rewardOwner = new Schema({
  studentid: {
    type: Number,
    required: true,
  },
  reward: {
    type: String,
    required: true,
  },imgsrc: {
    type: String,
    required: true,
  },price:{
    type:Number,
    required:true,
},
});


var actModel = mongoose.model("RewardGet", rewardOwner);

module.exports = actModel;
