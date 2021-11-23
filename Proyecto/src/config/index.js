require('dotenv').config(); //Nos ayuda a traer todas esas variables que están en .env

//Hacer que este archivo se utilice en otros:
module.exports.Config = { //Exportar el archivo e importar en cualquier otro. 
    //Variables de entorno
    port: process.env.PORT,
}