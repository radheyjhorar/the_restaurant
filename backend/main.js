const express = require("express");

// Require Routes
const customerRoute = require('./routes/customer.route');
const productRoute = require('./routes/product.route');

const app = express();
const PORT = 1212;

app.use(express.json());


// // For testing purposes
// app.get('/', (req, res) => {
//   res.send("Hello world!")
// })

// Route to handle API requests
app.use('/api/customers', customerRoute);
app.use('/api/products', productRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
