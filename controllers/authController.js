const User = require('../models/usermodel');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const AppError = require('../errorHandler/customErrorObject');

const signUp = async(req, res) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    v

    const token = newUser.createJWT()

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

    if (!user || !(await user.comparePasswords(password, user.password))) throw new AppError('invalid detals', StatusCodes.BAD_REQUEST)

    const token = user.createJWT();


    res.status(StatusCodes.OK).json({
        token,
        data :{
            user
        }
    })
}

module.exports = {
    signUp, login
}