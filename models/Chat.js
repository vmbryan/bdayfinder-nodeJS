const mongoose = require('mongoose')
const Schema = mongoose.Schema
const chatSchema = new Schema({
    text : {
        type :String,
        required : true
    },
    sender: String,
    receiver: String,
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat