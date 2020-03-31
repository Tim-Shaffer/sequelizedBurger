// =============================================================
// Used Activity 16 as a starting point
// =============================================================

// =============================================================
// Dependencies
// =============================================================
var orm = require("../config/orm.js");

// establish the burger constructor
var burger = {
    
    // create the selectAll method to select all rows from the burgers table
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // create the insertOne method to insert a new row into the burgers table
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    // create the updateOne method to update a specific row in the burgers table
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
    
};

// export the burger object to be available for use by other files
module.exports = burger;