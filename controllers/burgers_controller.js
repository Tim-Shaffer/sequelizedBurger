// =============================================================
// Used Activity 9 as a starting point
// =============================================================

// =============================================================
// Dependencies
// =============================================================
// var express = require("express");

// Require the models
var db = require("../models");

// set a router variable to use the Router method of the express package
// var router = express.Router();

// establish the router get method to call the Burger object SelectAll method 
module.exports = function(app) {

  // default for the index to then select customer or burger viewpoint
  app.get("/", function(req, res) {

    // call the index handlebar to render the selected Object 
    res.render("index");

  });

  // default view for getting all burgers
  app.get("/burger", function(req, res) {

    db.Burger.findAll(
      {include: [db.Customer],
        order: [
          ['burger_name', 'ASC'],
          ['id', 'DESC'],
        ],
      })
      .then(function(dbBurger) {

      // create an Object to hold all the returned rows
      var hbsObject = {
        burgers: dbBurger
      };

        // call the index handlebar to render the selected Object 
        res.render("cust_burger", hbsObject);
        // res.json(hbsObject);

    });

  });

  // default view for getting all burgers by id
  app.get("/burger/:id", function(req, res) {

    db.Burger.findAll(
      { where: {
        CustomerId: req.params.id
        },
        include: [db.Customer],
        order: [
          ['burger_name', 'ASC'],
          ['id', 'DESC'],
        ],
      })
      .then(function(dbBurger) {

      // create an Object to hold all the returned rows
      var hbsObject = {
        burgers: dbBurger
      };

        // call the index handlebar to render the selected Object 
        res.render("cust_burger", hbsObject);
        // res.json(hbsObject);

    });

  });

  // establish the router post method to call the Burger object insertOne method 
  app.post("/", function(req, res) {

    db.Burger.create({
      burger_name: req.body.burger_name,
      CustomerId: req.body.CustomerId
    }).then(function(dbBurger) {

      // respond to the posting route with the ID of the new burger
      res.json(dbBurger);

    });

  });

  // establish the router put method to call the Burger object updateOne method  
  app.put("/:id", function(req, res) {

    db.Burger.update({
          devoured: req.body.devoured
    }, {

      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        res.status(200).end();
      });

  });

   // GET route for getting all of the burgers
   app.get("/api/burgers", function(req, res) {
    var query = {};
    if (req.query.customer_id) {
      query.CustomerId = req.query.customer_id;
    }
    
    db.Burger.findAll({
      where: query,
      include: [db.Customer]
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });

};
  