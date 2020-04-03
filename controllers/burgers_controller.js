// Require the models
var db = require("../models");

// export the constructor to make available in other files
module.exports = function(app) {

  // default for the index view
  app.get("/", function(req, res) {

    // call the index handlebar to render the index file
    res.render("index");

  });

  // default view for getting all burgers
  app.get("/burger", function(req, res) {

    db.Burger.findAll({
      include: [db.Customer],
      order: [
          ['burger_name', 'ASC'],
          ['id', 'DESC'],
      ],
    }
    ).then(function(dbBurger) {

      // create an Object to hold all the returned rows
      var hbsObject = {
        Burgers: dbBurger
      };

      console.log(JSON.stringify(hbsObject));

      // call the index handlebar to render the selected Object 
      res.render("cust_burger", hbsObject);

    });

  });

  // default view for getting all burgers for a specific Customer
  app.get("/burger/:id", function(req, res) {

    db.Burger.findAll({ 
      where: {
          CustomerId: req.params.id
      },
      include: [db.Customer],
      order: [
          ['burger_name', 'ASC'],
          ['id', 'DESC'],
      ],
    }
    ).then(function(dbBurger) {

      // create an Object to hold all the returned rows
      var hbsObject = {
        Burgers: dbBurger
      };

      // call the cust_burger handlebar to render the selected Object 
      res.render("cust_burger", hbsObject);

    });

  });

  // establish the app post method to call the Burger object insertOne method 
  app.post("/", function(req, res) {

    // to create a new burger requires a burger name and the customer it is associated to
    db.Burger.create({
        burger_name: req.body.burger_name,
        CustomerId: req.body.CustomerId
      }
    ).then(function(dbBurger) {

      // respond to the posting route with the ID of the new burger
      res.json(dbBurger);

    });

  });

  // establish the app put method to call the Burger object updateOne method  
  app.put("/:id", function(req, res) {

    // update the devoured column for a specific burger id
    db.Burger.update({
          devoured: req.body.devoured
      }, {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbBurger) {

        // respond to the update route with a successful status 
        res.status(200).end();

      });

  });

  // GET api route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    
    db.Burger.findAll(
      {
        include: [db.Customer]
      }
    ).then(function(dbBurger) {

      // respond to the get route with the burgers
      res.json(dbBurger);

    });

  });

};
  