const express = require('express');
const router = express.Router();

// Require Model
const ProductsModel = require('../models/products.model');
const upload = require('../helpers/multer');

const ProductsController = {

  // Get All Products
  getAllProd: async (req, res) => {
    const data = await ProductsModel.getAll();
    if (data) {
      // res.status(200).send(data);`
      res.render('pages/product/productList', { data });
    } else {
      res.status(500).send('No products found');
    }
  },

  // Get One Product by ID
  getOneProd: async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await ProductsModel.getOne(id);
    if (data) {
      // res.status(200).send(data);
      res.render('pages/product/productLanding', { data });
    } else {
      res.status(404).send('Product not found');
    }
  },

  // Add a new Product
  addProd: (req, res) => {
    upload.array('images', 5)(req, res, async (err) => {
      if (err) {
        return res.status(400).send(err);
      }

      const { name, price, ingredients } = req.body;
      const values = [name, price, ingredients];
      const imgs = [];
      req.files && req.files.map((file) => imgs.push(file.originalname));
      const data = await ProductsModel.addOne(values, imgs);

      if (data) {
        // res.status(201).send("Product added successfully!");
        // console.log("Product added successfully!");
        // res.render('pages/product/addProduct', { uploadedFiles: req.files });
        
        // Alert message for client-side
        req.flash('info', 'success');
        res.redirect('/addProduct');
      } else {
        req.flash('info', 'failed');
        // res.status(500).send('Failed to add product!');
      }
    })
  },

  // Add many products
  addManyProd: async (req, res) => {
    const products = req.body;
    const data = await ProductsModel.addMany(products);
    if (data) {
      res.status(201).send('Products added successfully!');
    } else {
      res.status(500).send('Failed to add products');
    }
  },

  // Update a Product By id
  updateProd: async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const data = await ProductsModel.updateOne(id, product);
    if (data) {
      res.status(201).send("Product updated successfully!");
    } else {
      res.status(500).send('Failed to update Product!');
    }
  },


  // Delete a Product By id
  deleteProd: async (req, res) => {
    const id = req.params.id;
    const data = await ProductsModel.deleteOne(id);
    if (data.affectedRows > 0) {
      res.status(201).send("Product deleted successfully!");
    } else {
      res.status(500).send('Product not found!');
    }
  },

  // Delete many products
  deleteManyProd: async (req, res) => {
    const ids = req.body;
    const data = await ProductsModel.deleteMany(ids);
    if (data.affectedRows > 0) {
      res.status(201).send('Products deleted successfully!');
    } else {
      res.status(500).send('Products not found!');
    }
  },

  // Search a product by its name
  searchProdByName: async (req, res) => {
    const name = req.params.name;
    const data = await ProductsModel.searchByName(name);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(500).send('Product not found');
    }
  },


}



module.exports = ProductsController;