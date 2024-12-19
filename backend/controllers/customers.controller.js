const DB = require('../DB/connection');

// require Model
const CustomerModels = require('../models/customers.model');


// Get All Customers
const getAllCust = async (req, res) => {
  const data = await CustomerModels.getAll();
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(500).send('No customers found');
  }
}

// Get one customer by ID
const getOneCust = async (req, res) => {
  const id = req.params.id;
  const data = await CustomerModels.getByID(id);
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(500).send('Customer not found');
  }
}

// Add Many customers
const addManyCust = async (req, res) => {
  const customers = req.body;
  const data = await CustomerModels.addMany(customers);
  if (data) {
    res.status(201).send("Customers added successfully!");
  } else {
    res.status(500).send('Internal Server Error');
  }
}

// Add one customer
const addOneCust = async (req, res) => {
  const { name, mobile, email, address } = req.body;
  const values = [name, mobile, email, address];
  const data = await CustomerModels.addOne(values);
  if (data) {
    res.status(201).send('Customer added successfully!');
  } else {
    res.status(500).send('Internal Server Error');
  }
}

// Update customer by ID
const updateCust = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const data = await CustomerModels.updateOne(id, updatedData);
  if (data) {
    res.status(201).send('Customer updated successfully!');
  } else {
    res.status(500).send('Internal Server Error');
  }
}

// Delete customer by ID
const deleteCust = (req, res) => {
  const id = req.params.id;
  const data = CustomerModels.deleteOne(id);
  if (data) {
    res.status(200).send('Customer deleted successfully!');
  } else {
    res.status(500).send('Internal Server Error');
  }
}

// Delete many customers by id
 const deleteManyCust = (req, res) => {
  const ids = req.body;
  const data = CustomerModels.deleteMany(ids);
  if (data) {
    res.status(200).send('Customers deleted successfully!');
  } else {
    res.status(500).send('Internal Server Error');
  }
}


// export all controllers function
module.exports = {
  getAllCust,
  getOneCust,
  addManyCust,
  addOneCust,
  updateCust,
  deleteCust,
  deleteManyCust,
  
};