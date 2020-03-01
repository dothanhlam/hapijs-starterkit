'use strict';

const Sequelize = require('sequelize')
const Glob = require('glob');

exports.plugin = {
    register: (plugin, options) => {

      const sequelize = new Sequelize(options.database, options.user, options.password, {
        dialect: 'mariadb', // or 'sqlite', 'postgres', 'mariadb'
        host: options.host,
        port: options.port, // or 5432 (for postgres)
        define: {
          timestamps: false
      }
      });

      sequelize.authenticate()
      .then(function(err) {
        console.log('Connection has been established successfully.');
        // Load models 
      let DB = {};
      var models = Glob.sync('app/models/*.js');
      models.forEach(function(model) {
        console.log('model: ', model)
        const bindingModel = require('../' + model)(sequelize, Sequelize.DataTypes);
        DB[bindingModel.name] = bindingModel;
      });
      
      plugin.expose('db', DB);
      }, function (err) { 
        console.log('Unable to connect to the database:', err);
      });

      
    },
    pkg: require('../package.json'),
    name : 'mysql'
}