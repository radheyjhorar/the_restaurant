const express = require('express');
const router = express.Router();

// Require controllers
const controllers = require('../controllers/users.controller');


// Get all users
router.get('/', controllers.getAll);

// Get user by email and password
router.get('/login', controllers.userLogin);

// Add a new user
router.post('/register', controllers.register);



module.exports = router;