//Va contener todo nuestro servidor
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => { //La ruta y el controlador de dicha ruta
    res.json({
        message: 'Hola mundo, desde Express'
    })
}) 

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`) //Que escuche en nuestro mismo computador con localhost.
})