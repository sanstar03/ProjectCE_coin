const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const newactivity = new Schema({
  subject: {
    type: String,
    required: true,
    trim:true,
  },
  teacher:{
    type: String,
    required: true,
    trim:true,
  },
  name: {
    type: String,
    required: true,
    unique:true,
    minlength:2,
    maxlength:32
  },
  acttype: {
    type: Number,
    required: true,
    min:1,
    max:2
  },    
  price: {
    type: Number,
    min:0,
    max:1,
    default:0
  },
  memberId:[{ 
    type: String ,
    validate: (value) => {
    return validator.isAlphanumeric(value);
    }
  }]
});


var actModel = mongoose.model("actNew", newactivity);

module.exports = actModel;
