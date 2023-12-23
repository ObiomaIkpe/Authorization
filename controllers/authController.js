const User = require('../models/usermodel');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken')

const signUp = async(req, res) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const token = jwt.sign(newUser._id, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})

    res.status(StatusCodes.OK).json({
        token,
        data: {
            newUser
        }
    })
}

const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) throw new AppError('Invalid email or password', StatusCodes.BAD_REQUEST)

    const user = await User.findOne({email})
    console.log(user);
}