// =============================================================
// Used Activity 16 as a starting point
// =============================================================

// =============================================================
// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {

  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {

    var value = ob[key];

    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {

      // if string with spaces, add quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {

        value = "'" + value + "'";

      }
      
      // e.g. {devored: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();

};

// declare an orm object variable
var orm = {
  
  // create a selectAll method to return all rows from a provided table
  selectAll: function(tableInput, cb) {

    // build the SQL query syntax for the select statement  
    var queryString = "SELECT * FROM " + tableInput + ";";

      // use the existing db connection and call the query method with the built queryString
      connection.query(queryString, function(err, result) {

        if (err) {
 
          throw err;
 
        }

        // callback function to wait for the query and then return the results
        cb(result);

      });
    
  },

  // create an insertOne method to insert a new row into the provided table
  insertOne: function(table, col, val, cb) {

    // build the SQL query syntax for the insert statement 
    var queryString = "INSERT INTO " + table + "(";
      queryString += col.toString();
      queryString += ") VALUES ('";
      queryString += val.toString();
      queryString += "') ";

    // use the existing db connection and call the query method with the built queryString
    connection.query(queryString, function(err, result) {

      if (err) {

        throw err;
      }

        // callback function to wait for the query and then return the results
        cb(result);

    });
    
  },

  // create an updateOne method to update a row in the provided table
  updateOne: function(table, objColVals, condition, cb) {
    
    // build the SQL query syntax for the update statement 
    var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

    // use the existing db connection and call the query method with the built queryString
    connection.query(queryString, function(err, result) {
      
      if (err) {

        throw err;
      }

        // callback function to wait for the query and then return the results
        cb(result);

    });

  }

};

// export the orm object to be available for use by other files
module.exports = orm;
