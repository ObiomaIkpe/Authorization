const mongoose = require('mongoose');

const connectDB = (URL) => {
    try {
        console.log('connected to Database')
        return mongoose.connect(URL);
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB