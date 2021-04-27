const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const specialactivity = new Schema({
  name: {
    type: String,
    required: true,
  },    
  imgsrc: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  }
  ,
  date: {
    type: String,
    required: true,
  }
  ,
  time: {
    type: String,
    required: true,
  }
  ,
  price:{
      type:Number,
      required:true,
  },
  detail: {
    type: String,
    required: true,
  }
  
});


var actModel = mongoose.model("SpecialActivity", specialactivity);

module.exports = actModel;
