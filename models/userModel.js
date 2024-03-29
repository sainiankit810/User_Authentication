const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true, unique:true},
    password:{type: String, required: true},
    contact:{type:Number, required: true},
    joinedOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userModel)