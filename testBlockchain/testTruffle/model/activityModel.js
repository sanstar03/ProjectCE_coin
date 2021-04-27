const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const newactivity = new Schema({
  activityname: {
    type: String,
    required: true,
  },
  location:{
    type: String,
    required: true,
    maxlength:32
  },
  subject: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },    
  price: {
    type: Number,
    min:0,
    max:10,
    maxlength:2,
    default:0
  },
});


var actModel = mongoose.model("actNew", newactivity);

module.exports = actModel;
