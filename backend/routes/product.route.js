const express = require('express');
const router = express.Router();

// Require controllers
const productsController = require('../controllers/products.controller');

// Get all products
router.get('/', productsController.getAllProd);

// Get one Product by its ID
router.get('/:id', productsController.getOneProd);

// Add a new product
router.post('/', productsController.addProd);

// Add many products
router.post('/many', productsController.addManyProd);

// Update a product
router.put('/:id', productsController.updateProd);

// Delete a product
router.delete('/:id', productsController.deleteProd);

// Delete many products
router.delete('/', productsController.deleteManyProd);

// Search product by name
router.get('/name/:name', productsController.searchProdByName);



module.exports = router;