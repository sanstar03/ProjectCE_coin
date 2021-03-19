const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const activitySchema = new Schema({
  teacher: [{ type: String ,
  validate: (value) => {
  return validator.isAlphanumeric(value);
  }
}],
  subject: {
    type: String,
    required: true,
    validate: (value) => {
      return validator.isAlphanumeric(value);
    },
  },
  subjectId: {
    type: Number,
    required: true,
  },
  memberId:[{ type: String ,
    validate: (value) => {
    return validator.isAlphanumeric(value);
    }
  }]
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

var userModel = mongoose.model("subject", activitySchema);
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
