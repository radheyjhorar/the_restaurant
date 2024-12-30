const express = require('express');
const router = express.Router();

// Require controllers
const controllers = require('../controllers/users.controller');


// Get all users
router.get('/', controllers.getAll);

// Add a new user
router.post('/register', controllers.register);

// Get user by email and password
router.post('/login', controllers.login);





module.exports = router;