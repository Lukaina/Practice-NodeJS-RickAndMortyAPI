//Va contener todo nuestro servidor
const express = require('express');

const data = require('./MOCK_DATA.json');

const app = express();
const port = 3000;

app.get('/', (req, res) => { //La ruta y el controlador de dicha ruta
    res.json({
        message: "Lista de usuari@s",
        body: data,
    })
}) 

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`) //Que escuche en nuestro mismo computador con localhost.
})