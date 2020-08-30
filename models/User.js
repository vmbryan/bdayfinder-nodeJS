const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({});
// mechanisme mongoose plugt salt etc. in
User.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', User);