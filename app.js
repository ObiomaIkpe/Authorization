const express = require('express');
const dotenv = require('dotenv')
require('express-async-errors');
const authrouter = require('./routes/authRoutes')
const app = express();
const connectDB = require('./DB/connect')
const errorHandlerMiddleWare = require('./errorHandler/errorHandler')

app.use(express.json());
dotenv.config({path: 'config.env'})

app.use('/api/v1/auth', authrouter);


app.get('/', (req, res) => {
    res.send('hell from the server side');
})


const port = process.env.PORT || 4000;

app.use(errorHandlerMiddleWare);

const start = async (URL) => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`listening on port ${port}`))
    } catch (err) {
        console.log(err)
    }
}

start()