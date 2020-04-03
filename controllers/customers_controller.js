// =============================================================
// Dependencies
// =============================================================

// Require the models
var db = require("../models");

// establish the router get method to call the Burger object SelectAll method 
module.exports = function(app) {

  // default view for getting all customers
  app.get("/customer", function(req, res) {

    db.Customer.findAll(
      { include: [db.Burger],
        order: [
          ['cust_name', 'ASC'],
          ['id', 'DESC'],
        ],
      })
      .then(function(dbCustomer) {

      // create an Object to hold all the returned rows
      var hbsObject = {
        customers: dbCustomer
      };

        // call the index handlebar to render the selected Object 
        res.render("customer", hbsObject);
        // res.json(hbsObject);

    });

  });

  // establish the router post method to call the Customer object insertOne method 
  app.post("/customer", function(req, res) {

    db.Customer.create({
      cust_name: req.body.cust_name
    }).then(function(dbCustomer) {

      // respond to the posting route with the ID of the new Customer
      res.json(dbCustomer);

    });

  });

     // GET route for getting all of the customers
     app.get("/api/customers", function(req, res) {
      
      db.Customer.findAll({
        include: [db.Burger]
      }).then(function(dbCustomer) {
        res.json(dbCustomer);
      });
      
    });

};
  