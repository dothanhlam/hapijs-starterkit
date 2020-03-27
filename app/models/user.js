'use strict';

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        field: 'id',
        primaryKey: true
    },
    ssoId: {
        type: DataTypes.STRING,
        field: 'sso_id',
        allowNull: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password'
    },
    }, {
    // Other model options go here
    modelName: 'User', // We need to choose the model name
    tableName: 'users'
    });
    return User;
}