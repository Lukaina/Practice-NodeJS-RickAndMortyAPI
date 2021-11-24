const { ObjectId } = require('mongodb');
//Traer módulo de la base de datos
const { Database } = require('../database/index');

const COLLECTION = 'products';

const getAll = async () => { //Traerá todos los productos
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return collection.findOne({ _id: ObjectId(id) });
}

const create = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
};