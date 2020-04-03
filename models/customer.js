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
    }, {
      freezeTableName: true // Model tableName will be the same as the model name
    });

    Customer.associate = function(models) {
        // Associating Customer with Burger
        // When a Customer is deleted, also delete any associated Burgers
        Customer.hasMany(models.Burger, {
          onDelete: "cascade"
        });
    };

    return Customer;

};