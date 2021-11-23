const express = require('express');
const debug = require('debug')('app:main'); //En vez de console.log

const { Config } = require('./src/config/index'); //Destructuring

const app = express();

app.use(express.json()); //Dando la capacidad al servidor de recibir datos en el cuerpo de la petición

//Módulos 

app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto ${Config.port}`);
})