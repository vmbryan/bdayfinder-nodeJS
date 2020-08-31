const Chat = require('../../../models/Chat')

const create = (req, res, next) => {

    console.log(req.body)

    let chat = new Chat()
    chat.text = req.body.text
    console.log(req.user)
    chat.sender = req.user._id
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