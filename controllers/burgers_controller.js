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

  app.get("/", function(req, res) {


    db.sequelizedBurger.findAll({}).then(function(dbBurger) {

      // create an Object to hold all the returned rows
      var hbsObject = {
        burgers: dbBurger
      };

        // call the index handlebar to render the selected Object 
        res.render("index", hbsObject);
        // res.json(hbsObject);

    });

  });

  // establish the router post method to call the sequelizedBurger object insertOne method 
  app.post("/", function(req, res) {

    db.sequelizedBurger.create({
      burger_name: req.body.burger_name
    }).then(function(dbBurger) {

      // respond to the posting route with the ID of the new burger
      res.json(dbBurger);

    });

  });

  // establish the router put method to call the sequelizedBurger object updateOne method  
  app.put("/:id", function(req, res) {

    // create a variable to hold the condition statement to be passed
    var condition = "id = " + req.params.id;

    db.sequelizedBurger.update({

        devoured: req.body.devoured

    }, {

      where: {
        id: condition
      }
    })
      .then(function(dbBurger) {
        res.status(200).end();
      });

  });

};
  