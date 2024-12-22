const DB = require('../DB/connection');


const OrderModel = {

  // Get all orders from the database.
  getAll: async () => {
    try {
      const [rows] = await DB.query("SELECT * FROM orders");
      return rows;
    } catch (error) {
      console.log("Internal server error:", error)
    }
  },

  // Get one order by ID from the database.
  getByID: async (id) => {
    try {
      const query = `SELECT * FROM orders WHERE id = '${id}'`;
      const [rows] = await DB.query(query);
      return rows;
    } catch (error) {
      console.log("Internal server error:", error)
    }
  },

  // Add a new order to the database.
  addOne: async (order) => {
    try {
      const query = `INSERT INTO orders (customer_id, product_id, total_amount, order_date) VALUES (?, ?, ?, ?)`;
      const [rows] = await DB.query(query, order);
      console.log(`Effected ${rows.affectedRows} row`)
      return rows;
    } catch (error) {
      console.log("Error adding order:", error)
    }
  },

  // Update an existing order in the database.
  updateOne: async (id, updatedData) => {
    try {
      const query = `UPDATE orders SET? WHERE id = '${id}'`;
      const [rows] = await DB.query(query, updatedData);
      console.log(`Effected ${rows.affectedRows} row`)
      return rows;
    } catch (error) {
      console.log("Error updating order:", error)
    }
  },

  // Delete an existing order from the database.
  deleteOne: async (id) => {
    try {
      const query = `DELETE FROM orders WHERE id = '${id}'`;
      const [rows] = await DB.query(query);
      console.log(`Effected ${rows.affectedRows} row`)
      return rows;
    } catch (error) {
      console.log("Error deleting order:", error)
    }
  },

  // Delete many orders by IDs
  deleteMany: async (ids) => {
    try {
      const query = `DELETE FROM orders WHERE id IN (?)`;
      const [rows] = await DB.query(query, [ids]);
      console.log(`Effected ${rows.affectedRows} rows`)
      return rows;
    } catch (error) {
      console.log("Error deleting orders:", error)
    }
  },

  // Search orders by customer ID
  searchByName: async (customerID) => {
    try {
      const query = `SELECT * FROM orders WHERE customer_id = '${customerID}'`;
      const [rows] = await DB.query(query);
      return rows;
    } catch (error) {
      console.log("Internal server error:", error)
    }
  },


}


module.exports = OrderModel;