const Chat = require('../../../models/Chat')

const create = (req, res, next) => {

    console.log(req.body)

    let chat = new Chat()
    chat.text = req.body.text
    chat.sender = req.body.sender
    chat.receiver = req.body.receiver
    chat.save((err, doc) => {

        if(err){
            res.json({
                "status" : "error",
                "message" : "could not save chat"
            })
        }


        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "chat" : doc
                }
            })
        }
    })
    
}

const getAll = (req, res) => {
    Chat.find({"sender" : "User A"}, (err,docs) => {
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "chats" : docs
                }
            })
        }
    })
}

module.exports.getAll = getAll
module.exports.create = create