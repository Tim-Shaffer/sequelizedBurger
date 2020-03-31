-- Create the Database if it doesn't already exist
CREATE DATABASE IF NOT EXISTS burgers_db;

-- use the specified database
USE burgers_db;

-- create a table in the burgers database
CREATE TABLE IF NOT EXISTS burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);