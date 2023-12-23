const AppError = require('./customErrorObject');

const errorHandlerMiddleWare = (err, req, res, next) => {

    console.log(err)
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    return res.status(err.statusCode).json(
        {
            message: err.message
        }
    )
}

module.exports = errorHandlerMiddleWare;