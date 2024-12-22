const express = require("express");

// Require Routes
const customerRoutes = require('./routes/customer.route');
const productRoutes = require('./routes/product.route');
const orderRoutes = require('./routes/order.route');

const app = express();
const PORT = 1212;

app.use(express.json());


// // For testing purposes
// app.get('/', (req, res) => {
//   res.send("Hello world!")
// })

// Route to handle API requests
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
