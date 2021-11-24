const createError = require('http-errors');
const debug = require('debug')('app:module-products-controller');

const { ProductsService } = require('./services');
const { Response } = require('../common/response');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll()
            Response.success(res, 200, 'Lista de productos', products);
        } catch (error) {
            debug(error)
            Response.error(res);
            // res.status(500).json({message: 'Internal server error'})
        }
    },

    getProduct: async (req, res) => {
        try {
            const { params: { id } } = req;
            let product = await ProductsService.getById(id)
            if (!product) {
                Response.error(res, new createError.NotFound())
            } else {
                Response.success(res, 200, `Producto ${id}`, product);
            } 
        } catch (error) {
            debug(error)
            Response.error(res);
        }   
    },

    createProduct: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const insertedId = await ProductsService.create(body)
                Response.success(res, 201, 'Producto agregado', insertedId)
                // res.json(insertedId);
            }    
        } catch (error) {
            debug(error)
            Response.error(res);
        }
    },
}