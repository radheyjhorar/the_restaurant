const DB = require('../DB/connection');


const ProductsModel = {
  // Get all products
  getAll: async () => {
    try {
      const query = 'SELECT products.id, products.name, products.price, products.ingredients, product_imgs.image_name FROM products LEFT JOIN product_imgs ON products.id = product_imgs.product_id GROUP BY products.id, products.name, products.price, products.ingredients;'
      const [rows] = await DB.query(query);
      console.log("Rows = ", rows);
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
  addOne: async (product, imgArr) => {
    try {
      const query = "INSERT INTO products (name, price, ingredients) VALUES (?, ?, ?)";
      const [rows] = await DB.query(query, product);
      console.log(`Affected ${rows.affectedRows} row`);

      // Add images to the database using a separate query for each image
      const imgQuery = `INSERT INTO product_imgs (product_id, image_name) VALUES (?, ?)`;
      const rows1 = rows;
      imgArr && await imgArr.forEach(async (img) => {
        const [rows] = await DB.query(imgQuery, [rows1.insertId, img])
        console.log(`Affected ${rows.affectedRows} row`);
      })
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