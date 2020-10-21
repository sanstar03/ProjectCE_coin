const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;
const walletSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: (value) =>{
            return validator.isAlphanumeric(value);
        }
    },
    address:{
        type: String,
        required: true,
        unique: true,
        },
    privateKey: {
        type: String,
        required: true
        }
})
module.exports = mongoose.model('Wallets',walletSchema);