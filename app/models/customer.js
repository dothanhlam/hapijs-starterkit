'use strict';

module.exports = function(sequelize, DataTypes) {
    const Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.STRING,
            field: 'id',
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            field: 'first_name',
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'last_name',
            allowNull: true,
        },
        fullName: {
            type: DataTypes.STRING,
            field: 'full_name',
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            field: 'email',
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone',
            allowNull: true,
        },
        ic: {
            type: DataTypes.STRING,
            field: 'ic_number',
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            field: 'address',
            allowNull: true,
        },
         // Other model options go here
        modelName: 'Customer', // We need to choose the model name
        tableName: 'customers'
    });
    return Customer;
}
