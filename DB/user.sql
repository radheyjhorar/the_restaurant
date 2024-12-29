
-- Create user table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- Unique user ID, auto-incremented
    name VARCHAR(20) NOT NULL,                  -- User's full name
    mobile_no VARCHAR(15) NOT NULL UNIQUE,      -- User's mobile number, unique
    email VARCHAR(30) NOT NULL UNIQUE,         -- User's email address, unique
    password VARCHAR(255) NOT NULL,             -- User's password (hashed)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp of when the user is created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- Timestamp of the last update to the record
);