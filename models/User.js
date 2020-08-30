const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({
    email : String,
    firstname: String,
    lastname : String,
    birthday: {type: Date},
    password: String
});
// mechanisme mongoose plugt salt etc. in
User.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', User);
