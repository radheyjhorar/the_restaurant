
const mysql = require('mysql2');

const DB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "the_restaurant"
})

DB.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to DB:', err);
    return;
  }
  console.log('Database connected successfully!');

  // Release the connection back to the pool
  connection.release();
});

module.exports = DB.promise();