// =============================================================
// Used Activity 9 as a starting point
// =============================================================
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
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
    }, {
      freezeTableName: true // Model tableName will be the same as the model name
    });

    Burger.associate = function(models) {
        // A Burger belongs to a Customer
        // A Burger can't be created without a Customer due to the foreign key constraint
        Burger.belongsTo(models.Customer, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Burger;

};
  
