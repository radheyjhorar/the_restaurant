

// Require User Modele
const userModele = require('../models/user.model');

// Define user controllers 
const userControllers = {
  
  // Get all users
  getAll: async (req, res) => {
    const data = await userModele.getAll();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(500).send('No users found!');
    }
  },

  // Get user by email and password
  userLogin: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const data = await userModele.userLogin(email, password);
    if (data) {
      res.status(201).send(data);
    } else {
      res.status(401).send('Invalid email or password!');
    }
  },

  // Create a new user
  register: async (req, res) => {
    const { name, mobile_no, email, password } = req.body;
    const values = [name, mobile_no, email, password];
    const data = await userModele.register(values);
    if (data) {
      res.status(200).send('User created successfully!');
      console.log("Rows " + data.affectedRows + " affected");
    } else {
      res.status(500).send('Failed to create user!');
    }
  },



}



module.exports = userControllers;