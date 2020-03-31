// =============================================================
// Used Activity 16 as a starting point
// =============================================================

// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var Burger = require("../models/burger.js");

// set a router variable to use the Router method of the express package
var router = express.Router();

// establish the router get method to call the Burger object SelectAll method 
router.get("/", function(req, res) {

    Burger.selectAll(function(data) {
      
      // create an Object to hold all the returned rows
      var hbsObject = {
        burgers: data
      };

      // call the index handlebar to render the selected Object 
      res.render("index", hbsObject);
    
    });

});
  
// establish the router post method to call the Burger object insertOne method 
router.post("/", function(req, res) {

  Burger.insertOne([
    "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {

    // respond to the posting route with the ID of the new burger
    res.json({ id: result.insertId });

  });

});

// establish the router put method to call the Burger object updateOne method  
router.put("/:id", function(req, res) {

  // create a variable to hold the condition statement to be passed
  var condition = "id = " + req.params.id;

  Burger.updateOne({

      devoured: req.body.devoured

  }, condition, function(result) {

    if (result.changedRows == 0) {

      // If no rows were changed, then the ID must not exist, so respond with a 404 "Not Found" status code and end the call
      return res.status(404).end();

    } else {

      // respond with a 200 "Success" status code and end the call 
      res.status(200).end();
    }
  });
});

// export the router object to be available for use by other files
module.exports = router;