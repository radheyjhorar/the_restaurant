const express = require('express');
const router = express.Router();

// require controllers
const customersController = require('../controllers/customers.controller')

// Get all customers
router.get("/", customersController.getAllCust);

// Get one customer by ID
router.get('/:id', customersController.getOneCust);

// post or add many customers
router.post('/', customersController.addManyCust);

// post or add one customer
router.post('/addone', customersController.addOneCust);

// Update customer
router.put('/:id', customersController.updateCust);

// Delete customer by ID
router.delete('/:id', customersController.deleteCust);

// Delete many customers by id
router.delete('/', customersController.deleteManyCust);

// Search customers by name
router.get('/name/:name', customersController.searchCustByName);


module.exports = router;