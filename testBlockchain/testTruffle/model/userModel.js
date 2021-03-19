const { number } = require("@hapi/joi");
const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const walletSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: (value) => {
      return validator.isAlphanumeric(value);
    },
  },
  firstname: {
    type: String,
    trim: true,
    // required:true,
    minlength: 2,
    maxlength: 32,
  },
  lastname: {
    type: String,
    trim: true,
    // required:true,
    minlength: 2,
    maxlength: 32,
  },
  studentid: {
    type: Number,
    trim: true,
    unique: true,
    require:true,
    minlength: 8,
    maxlength: 8,
  },
  address: {
    type: String,
    // required: true,
    unique: true,
  },
  privateKey: {
    type: String,
    required: true,
  },
  role:{
    type:Number,
    default:0
  }
});
//   .add({ firstname: {type:String}}).add({lastname: {type:String}}).add({studentid:{type:Number}});
//   .add({ lastname: String, require: true, minlenght: 2, maxlenght: 32 })
//   .add({studentid:Number,require:true,minlenght:8,maxlenght:8});
// mongoose
//   .model("Wallets", walletSchema)
//   .schema.add({
//     firstname: String,
//     required: true,
//     minlength: 2,
//     maxlength: 32
//   },{lastname:String,required: true,
//     minlength: 2,
//     maxlength: 32}

//     );

var userModel = mongoose.model("user1", walletSchema);
// .schema.add(
//   {
//     firstname: String,
//     required: true,
//     minlength: 2,
//     maxlength: 32,
//   },
//   { lastname: String, required: true, minlength: 2, maxlength: 32 },
//   {studentid:Number,require:true,minlength:8,maxlength:8}
// );
module.exports = userModel;
