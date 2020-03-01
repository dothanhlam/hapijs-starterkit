'use strict';

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
    userId: {
        type: DataTypes.STRING,
        field: 'UserID',
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'FirstName'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'LastName'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Email'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Password'
    },
    }, {
    // Other model options go here
    modelName: 'User', // We need to choose the model name
    tableName: 'user'
    });
    return User;
}