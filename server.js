// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var handlebars = require("express-handlebars");
var app = express();

// added PORT to either be assigned by HEROKU or default to 8080
var PORT = process.env.PORT || 8080;

// Requiring the models for syncing
var db = require("./models");

// added the ./ static to allow the image to show
app.use(express.static("./"));

// the public folder static is needed for the css styling
app.use(express.static("public"));

// use the appropriate middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set the express app to use handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require the controller files
require("./controllers/burgers_controller.js")(app);
require("./controllers/customers_controller.js")(app);

// Syncing the sequelize models and then start the Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  
  app.listen(PORT, function() {
    
    console.log("App listening on PORT " + PORT);
  
  });

});
