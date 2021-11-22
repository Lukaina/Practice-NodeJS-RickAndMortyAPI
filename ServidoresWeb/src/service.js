//CRUD
const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers: () => data, //Obtener l@s usuari@s
    //Función de crear nuev@ usuari@:
    createUser: (dataUser) => { //Recibe los datos del usuario
        let newUser = {
            id: data.length + 1, //Generar un id automático y consecutivo
            ...dataUser,
        }
        data.push(newUser);
        return newUser;
    }
}