const express = require("express");

// Require Routes
const customerRoutes = require('./routes/customer.route');
const productRoutes = require('./routes/product.route');
const orderRoutes = require('./routes/order.route');
const userRoutes = require('./routes/user.route');

const pageRoutes = require('./routes/pages.routes');

const app = express();
const PORT = 1212;

// Set the view engine to ejs
app.set('view engine', 'ejs')
app.use(express.static(__dirname));

app.use(express.json());

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
