// =============================================================
// Used Activity 9 as a starting point
// =============================================================
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("SequelizedBurger", {
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
        }
    });

    return Burger;

};
  
