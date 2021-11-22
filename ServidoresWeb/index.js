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

app.get('/:id', (req, res) => { 
    // let id = req.params.id; //Parámetros de ruta que vienen en el req, que nos envía nuestro cliente
    // console.log(id);
    let { params: { id } } = req;
    let user = Service.getUser(id); //Definir esta función de getUser en nuestro servicio
    res.json({
        message: `Usuari@ ${id}`,
        body: user, 
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

app.put('/:id', (req, res) => {
    let {params: { id }} = req;
    let modifyUser = req.body;
    res.json({
        message: `Usuari@ modificad@ con id: ${id}`,
        body: Service.modify(modifyUser, id)
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`) //Que escuche en nuestro mismo computador con localhost.
})