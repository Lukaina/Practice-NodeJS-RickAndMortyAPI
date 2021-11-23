const { MongoClient } = require("mongodb");
const debug = require("debug")("app:module-database");

const { Config } = require('../config/index');

var connection = null;
//Este archivo se encarga de exportar una función que nos devuelva la conexión a la base de datos
module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
    try {
        if(!connection) { //Si no existe conexión, que genere una
            const client = new MongoClient(Config.mongoUri); //MongoClient nos devuelve una conexión
            connection = await client.connect();
            debug('Nueva conexión realizada con MongoDB Atlas');
        }
        debug('Reutilizando conexión');
        const db = connection.db(Config.mongoDbname);
        resolve(db.collection(collection));
    } catch (error) {
        reject(error);
    }
});
