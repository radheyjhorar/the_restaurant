
// Require Model
const OrderModel = require('../models/orders.model');


const OrderControllers = {

  // Get All Orders
  getAll: async (req, res) => {
    const data = await OrderModel.getAll();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(500).send('No orders found');
    }
  },

  // Get One Order by ID
  getOne: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await OrderModel.getByID(id);
    if (data) {
      res.status(201).send(data);
    } else {
      res.status(500).send('Order not found!');
    }
  },

  // Add Order
  addOne: async (req, res) => {
    const { customer_id, product_id, total_amount, order_date } = req.body;
    const values = [customer_id, product_id, total_amount, order_date];
    const data = await OrderModel.addOne(values);
    if (data) {
      res.status(201).send('Order added successfully!');
    } else {
      res.status(500).send('Failed to add order!');
    }
  },

  // Update Order by ID
  updateOne: async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const data = await OrderModel.updateOne(id, updatedData);
    if (data) {
      res.status(201).send('Order updated successfully!');
    } else {
      res.status(500).send('Product not found!');
    }
  },

  // Delete Order by ID
  deleteOne: async (req, res) => {
    const id = req.params.id;
    const data = await OrderModel.deleteOne(id);
    if (data) {
      res.status(200).send('Order deleted successfully!');
    } else {
      res.status(500).send('Order not found!');
    }
  },

  // Delete Many Orders
  deleteMany: async (req, res) => {
    const ids = req.body;
    const data = await OrderModel.deleteMany(ids);
    if (data) {
      res.status(200).send('Orders deleted successfully!');
    } else {
      res.status(500).send('Orders not found!');
    }
  },

  // Search Order by Customer ID
  searchByName: async (req, res) => {
    const customer_id = req.params.customer_id;
    const data = await OrderModel.searchByName(customer_id);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(500).send('No orders found for this customer!');
    }
  },


}


module.exports = OrderControllers;