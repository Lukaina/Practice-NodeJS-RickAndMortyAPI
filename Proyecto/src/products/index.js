const express = require('express');

const router = express.Router(); //Manejo de rutas del módulo

module.exports.ProductsAPI = (app) => {
    //Rutas
    router
        .get('/', (req, res) => {}) //http://localhost:3000/api/products/
        .get('/:id', (req, res) => {}) //http://localhost:3000/api/products/23
        .post('/', (req, res) => {}) 

    app.use('/api/products', router) //Dentro de esta url configura el router
}