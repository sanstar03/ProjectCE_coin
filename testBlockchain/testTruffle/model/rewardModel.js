const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const rewardSchema = new Schema({
  rewardname: {
    type: String,
    required: true,
    
  },    
  imgsrc: {
    type: String,
    required: true,
  },
  owner:[{ type: String ,
    validate: (value) => {
    return validator.isAlphanumeric(value);
    }
  }],
  price:{
      type:Number,
      required:true,
  },
  rewardleft:{
      type:Number,
      required:true,
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

var userModel = mongoose.model("reward", rewardSchema);
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
