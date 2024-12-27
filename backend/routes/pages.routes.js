const express = require('express');
const router = express.Router();


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
  res.render('pages/product/addProduct');
})



module.exports = router;