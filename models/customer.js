// export the constructor to make available in other files
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
        // A customer can have many burger rows
        Customer.hasMany(models.Burger, {
          // When a Customer is deleted, also delete any associated Burgers
          onDelete: "cascade"
        });
    };

    return Customer;

};