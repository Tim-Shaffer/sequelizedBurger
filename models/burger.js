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

    sequelizedBurger.associate = function(models) {
        // A Burger belongs to a Customer
        // A Burger can't be created without a Customer due to the foreign key constraint
        sequelizedBurger.belongsTo(models.Customer, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return sequelizedBurger;

};
  
