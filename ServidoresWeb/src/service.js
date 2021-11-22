//CRUD
const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers: () => data, //Obtener l@s usuari@s
    getUser: (id) => {
        let identifier = Number(id); //id pasarlo a un valor númerico, pues viene como string
        let user = data.filter((person) => person.id === identifier)[0]; //filter retorna un arreglo
        return user;
    },
    //Función de crear nuev@ usuari@:
    createUser: (dataUser) => { //Recibe los datos del usuario
        let newUser = {
            id: data.length + 1, //Generar un id automático y consecutivo
            ...dataUser,
        }
        data.push(newUser);
        return newUser;
    },

    modify: (datauser, id) => {
        let identifier = Number(id);
        let user = data.splice((identifier - 1), 1 ,datauser);
    },
}