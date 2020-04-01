module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        cust_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            notEmpty: true, 
            len: [1,255]
            }
        }

    });

    Customer.associate = function(models) {
        // Associating Customer with sequelizedBurger
        // When a Customer is deleted, also delete any associated sequelizedBurgers
        Customer.hasMany(models.sequelizedBurger, {
          onDelete: "cascade"
        });
      };

    return Customer;

};