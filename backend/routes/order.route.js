const express = require('express');
const router = express.Router();

// require controllers
const ordersController = require('../controllers/orders.controller');

// Get all orders
router.get('/', ordersController.getAll);

// Get one order by its ID
router.get('/:id', ordersController.getOne);

// Add a new order
router.post('/', ordersController.addOne);

// Update order
router.put('/:id', ordersController.updateOne);

// Delete order by ID
router.delete('/:id', ordersController.deleteOne);

// Search order by customer name
router.get('/search/:customer_id', ordersController.searchByName);


module.exports = router;