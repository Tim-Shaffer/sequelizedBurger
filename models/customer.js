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

    return Customer;

};