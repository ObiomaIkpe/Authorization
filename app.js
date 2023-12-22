const express = require('express');
const dotenv = require('dotenv');
require('express-async-errors');
const authrouter = require('./routes/authRoutes')
const app = express();



app.use('api/v1/auth', authrouter)

app.use(errorHandlerMiddleWare);