const express = require('express');
const router = express.Router();
const updateProductById = require('../models/products.model').getOne;


router.get('/', (req, res) => {
  res.render('pages/home/home');
})

router.get('/register', (req, res) => {
  res.render('pages/logReg/register');
})

router.get('/login', (req, res) => {
  res.render('pages/logReg/login');
})

router.get('/addProduct', (req, res) => {
  res.render('pages/product/addProduct', { message: req.flash('info') });
})

router.get('/updateProduct/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await updateProductById(id);
  if (!product) {
    return res.status(500).send('Product not found');
  }
  res.render('pages/product/updateProduct', { product: product });
})


module.exports = router;