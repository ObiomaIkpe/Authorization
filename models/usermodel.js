const mongoose = require('mongoose');
const user = require('./usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'you must provide a name'],

    },
    email: {
        type: String,
        required: [true, 'must provide an email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'you must provide a name'],
        minLength: 8
    }
})

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();

    if(this.password) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
        next()
    }
})

userSchema.methods.comparePasswords = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

userSchema.methods.createJWT = function () {
    return jwt.sign(
      { userId: this._id, name: this.name },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    )
  }
  

module.exports = new mongoose.model('User', userSchema)
