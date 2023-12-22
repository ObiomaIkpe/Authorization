const User = require('../models/usermodel');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken')

const signUp = async(req, res) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

}