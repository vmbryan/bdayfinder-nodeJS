const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({
    username : String,
    password: String,
    birthday: {type: Date}
});
// mechanisme mongoose plugt salt etc. in
User.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', User);
