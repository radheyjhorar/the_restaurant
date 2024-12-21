-- Create customer table
CREATE TABLE IF NOT EXISTS customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  address VARCHAR(100)
)


-- Create Products Table
CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(20) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  ingredients VARCHAR(100)
)


-- Create Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT NOT NULL,
  ordered_item varchar(100) NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
)