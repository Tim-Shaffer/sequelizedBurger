// =============================================================
// Used Activity 9 as a starting point
// =============================================================
module.exports = function(sequelize, DataTypes) {
    var sequelizedBurger = sequelize.define("sequelizedBurger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            notEmpty: true, 
            len: [1,255]
            }
        },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
        },
    });

    return sequelizedBurger;

};
  
