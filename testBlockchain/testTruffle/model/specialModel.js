const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const newactivity = new Schema({
  code: {
    type: Number,
    required: true,
    maxlength:5
  },
  price:{
    type: Number,
    required: true,
    max:20,
    default:0
  }
});


var actModel = mongoose.model("Special", newactivity);

module.exports = actModel;
