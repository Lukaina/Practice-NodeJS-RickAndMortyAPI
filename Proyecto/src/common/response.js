//Respuesta estandar para todo lo que envíemos desde nuestra Api Rest
const createError = require('http-errors'); //Crear errores para enviarlos

module.exports.Response = {
    success: (res, status = 200, message = 'Ok', body = {}) => { //En caso de respuesta éxitosa
        res.status(status).json({ message, body })
    },
    error: (res, error = null) => {
        const { statusCode, message } = error ? error : new createError.InternalServerError();
        res.status(statusCode).json({ message})
    }
}