const User = require('../models/User')
const passport = require('passport')

const signup = async(req, res, next) => {
    let username = req.body.username
    let password = req.body.password
    // let birthdate = req.body.birthdate

    const user = new User({username : username})
    await user.setPassword(password)
    // await user.setBirthdate(birthdate)
    await user.save().then(result =>{
        res.json({
            'status' : 'success'
        })
    }).catch(error => {
        res.json({
            "status" : "error"
        })
    })
}

module.exports.signup = signup