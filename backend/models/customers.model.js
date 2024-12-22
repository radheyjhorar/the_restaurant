const DB = require('../DB/connection');


const CustomerModels = {

  // Get all customers from the database.
  getAll: async () => {
    try {
      const [rows] = await DB.query("SELECT * FROM customers");
      return rows;
    } catch (error) {
      console.log("Internal server error!", error)
    }
  },

  // Get one customer by ID from the database.
  getByID: async (id) => {
    try {
      const query = `SELECT * FROM customers WHERE id = '${id}'`;
      const [rows] = await DB.query(query);
      return rows;
    } catch (error) {
      console.error("Internal server error!", error);
    }
  },

  // Add many customers to the database.
  addMany: async (customers) => {
    try {
      const query = `INSERT INTO customers (name, mobile, email, address) VALUES ?`;
      const [rows] = await DB.query(query, [customers]);
      console.log('Customers added successfully!');
      console.log(`Effected ${rows.affectedRows} rows`)
      return rows;
    } catch (error) {
      console.error('Error adding customers:', error);
    }
  },

  // Add one customer
  addOne: async (customer) => {
    try {
      const query = `INSERT INTO customers (name, mobile, email, address) VALUES (?, ?, ?, ?)`;
      const [rows] = await DB.query(query, customer);
      console.log(`Effected ${rows.affectedRows} row`)
      return rows;
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  },

  // Update one customer by ID
  updateOne: async (id, updatedData) => {
    try {
      const query = `UPDATE customers SET? WHERE id = '${id}'`;
      const [rows] = await DB.query(query, updatedData);
      console.log(`Effected ${rows.affectedRows} rows`)
      return rows;
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  },
  
  // Delete one customer by ID
  deleteOne: async (id) => {
    try {
      const query = `DELETE FROM customers WHERE id = '${id}'`;
      const [rows] = await DB.query(query);
      console.log(`Effected ${rows.affectedRows} rows`)
      return rows;
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  },

  // Delete many customers by IDs
  deleteMany: async (ids) => {
    try {
      const query = `DELETE FROM customers WHERE id IN (?)`;
      const [rows] = await DB.query(query, [ids]);
      console.log(`Customers deleted successfully!`);
      console.log(`Effected ${rows.affectedRows} rows`)
      return rows;
    } catch (error) {
      console.error('Error deleting customers:', error);
    }
  },

  // Search customers by name
  searchByName: async (name) => {
    try {
      const query = `SELECT * FROM customers WHERE name LIKE '%${name}%'`;
      const [rows] = await DB.query(query);
      return rows;
    } catch (error) {
      console.error('Internal server error:', error);
    }
  },


}


module.exports = CustomerModels;