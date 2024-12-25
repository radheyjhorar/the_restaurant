const express = require('express');
const router = express.Router();


router.get('/addProduct', (req, res) => {
  res.render('pages/product/addProduct');
})



module.exports = router;