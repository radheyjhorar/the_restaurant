const express = require("express");

const customerRoute = require('./routes/customer.route');

const app = express();
const PORT = 1212;

app.use(express.json());


// // For testing purposes
// app.get('/', (req, res) => {
//   res.send("Hello world!")
// })

app.use('/api/customers', customerRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
