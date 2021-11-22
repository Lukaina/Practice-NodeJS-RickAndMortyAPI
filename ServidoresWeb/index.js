//Va contener todo nuestro servidor
const express = require('express');

const Service = require('./src/service');

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => { //La ruta y el controlador de dicha ruta
    res.json({
        message: "Lista de usuari@s",
        body: Service.getUsers(), //Utilizaré mi servicio y accedo a las propiedades del objeto
    })
})

//Agregar nuevo Endpoint:
app.post('/', (req, res) => {
    let { body: newUser } = req; //Destructuring
    // let newUser = req.body
    res.status(201).json({ //Responderle al cliente que los datos han sido agregados
        message: 'Usuari@ cread@',
        body: Service.createUser(newUser)
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`) //Que escuche en nuestro mismo computador con localhost.
})