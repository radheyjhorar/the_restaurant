const express = require("express");
const bp = require("body-parser");
const multer = require("multer");
const upload = require('./helpers/multer');
const flash = require('connect-flash');

var session = require('express-session');

const app = express();
const PORT = 1212;

// Middleware to parse incoming form data
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// Set the view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static(__dirname));

app.use(express.json());

app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));

app.use(flash());

// multer test code
app.post('/testuploadimg', upload.array('files'), (req, res) => {
  if (!req.files) {
    console.log(req)
    return res.status(400).send('No files uploaded.');
  }
  res.send("Files uploaded successfully!");
})

app.use('/addProduct', express.static('/public/uploadedImages'));


// Require Routes
const customerRoutes = require('./routes/customer.route');
const productRoutes = require('./routes/product.route');
const orderRoutes = require('./routes/order.route');
const userRoutes = require('./routes/user.route');

const pageRoutes = require('./routes/pages.routes');

// Pages Route
app.use('/', pageRoutes);

// Route to handle API requests
app.use('/api/user', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
