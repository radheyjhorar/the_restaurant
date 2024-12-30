
const DB = require('../DB/connection');


const userModels = {

  // Get all users from the database.
  getAll: async () => {
    try {
      const [rows] = await DB.query("SELECT * FROM users");
      return rows;
    } catch (error) {
      console.log("Internal server error:", error)
    }
  },

  // Get user by email and password
  login: async (email, password) => {
    try {
      const query = "SELECT * FROM users WHERE email =? AND password =?"
      const [rows] = await DB.query(query, [email, password]);
      return rows;
    } catch (error) {
      console.log("Internal server error:", error)
    }
  },

  // Create a new user
  register: async (values) => {
    try {
      const query = "INSERT INTO users (name, mobile_no, email, password) VALUES (?,?,?,?)";
      const [rows] = await DB.query(query, values);
      return rows;
    } catch (error) {
      console.log("Internal server error:", error);
    }
  },

  // Update user password
  updatePassword: async (id, newPassword) => {
    try {
      const query = "UPDATE users SET password =? WHERE id =?"
      const [rows] = await DB.query(query, [newPassword, id]);
      return rows;
    } catch (error) {
      console.log("Internal server error:", error);
    }
  },

  // Delete a user by ID
  delete: async (id) => {
    try {
      const query = "DELETE FROM users WHERE id =?"
      const [rows] = await DB.query(query, [id]);
      return rows;
    } catch (error) {
      console.log("Internal server error:", error);
    }
  },


}


module.exports = userModels;