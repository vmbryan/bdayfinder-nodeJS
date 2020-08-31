const User = require('../models/User')
const passport = require('passport')
const jwt  = require('jsonwebtoken')

const signup = async(req, res, next) => {
    let username = req.body.username
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let birthday = req.body.birthday
    let password = req.body.password
    

    const user = new User({
        username : username, 
        firstname : firstname,
        lastname : lastname,
        birthday: birthday,
    })
    await user.setPassword(password)
    // await user.setBirthdate(birthdate)
    await user.save().then(result =>{
        let token = jwt.sign({
            uid: result._id,
            username: result.username,
            dob : result.birthday
        }, "SecretForSigning")
        res.json({
            'status' : 'success',
            "data" : {
                "token" : token
            }
        })
    }).catch(error => {
        res.json({
            "status" : error
        })
    })
}

const login = async (req, res, next ) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        
        if(!result.user){
            return res.json({
                "status" : "failed",
                "message": "login failed"
            })
        }
        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username,
        }, "SecretForSigning" )

        return res.json({
            "status" : "success",
            "data" : {
                "token" : token
            }
        })
    }).catch(error => {
        res.json({
            "status" : "error",
            "message" : error
        })
    })
}

module.exports.signup = signup
module.exports.login = login
