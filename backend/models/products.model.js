const DB = require('../DB/connection');


const ProductsModel = {
  // Get all products
  getAll: async () => {
    try {
      const [rows] = await DB.query("SELECT * FROM products");
      return rows;
    } catch (error) {
      console.log(error)
    }
  },

  // Get one product by ID
  getOne: async (id) => {
    try {
      const query = `SELECT * FROM products WHERE id = '${id}'`;
      const [rows] = await DB.query(query);
      return rows;
    } catch (error) {
      console.log(error)
    }
  },

  // Add a new product
  addOne: async (product) => {
    try {
      const query = "INSERT INTO products (name, price, ingredients) VALUES (?, ?, ?)";
      const [rows] = await DB.query(query, product);
      console.log(`Affected ${rows.affectedRows} row`);
      return rows;
    } catch (error) {
      console.error('Error adding product:', error);
    }
  },

  // add many products to the database
  addMany: async (products) => {
    try {
      const query = `INSERT INTO products (name, price, ingredients) VALUES ?`
      const [rows] = await DB.query(query, [products]);
      console.log(`Affected ${rows.affectedRows} rows`);
      return rows;
    } catch (error) {
      console.error('Error adding customers:', error);
    }
  },

  // Update Product by id
  updateOne: async (id, updatedData) => {
    try {
      const query = `UPDATE products SET? WHERE id = ${id}`;
      const [rows] = await DB.query(query, updatedData);
      console.log(`Affected ${rows.affectedRows} row`);
      return rows;
    } catch (error) {
      console.error('Error updating product:', error);
    }
  },

  // Delete one product by ID
  deleteOne: async (id) => {
    try {
      const query = `DELETE FROM products WHERE id = ${id}`;
      const [rows] = await DB.query(query);
      console.log(`Affected ${rows.affectedRows} row`);
      return rows;
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  },

  // Delete many products by ID
  deleteMany: async (ids) => {
    try {
      const query = `DELETE FROM products WHERE id IN (?)`;
      const [rows] = await DB.query(query, [ids]);
      console.log(`Affected ${rows.affectedRows} rows`);
      return rows;
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  },

  // Search products by name
  searchByName: async (name) => {
    try {
      const query = `SELECT * FROM products WHERE name LIKE '%${name}%'`;
      const [rows] = await DB.query(query);
      return rows;
    } catch (error) {
      console.log('Error searching product:', error);
    }
  },



}



module.exports = ProductsModel;