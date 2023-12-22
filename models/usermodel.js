const mongoose = require('mongoose');
const user = require('./usermodel')

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

module.exports = new mongoose.model('User', userSchema)
