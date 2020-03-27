'use strict';
exports.plugin = {  
    pkg: require('../../../package.json'),
    name : 'customers_routes',
    register: async (server, options) => {
        const Controllers = {
            customers: {
                customers: require('../../controllers/web/customers')
            }
        };
        server.route([
            {
                method: 'GET',
                path: '/customers',
                config: Controllers.customers.customers.showCustomers
            }
        ]);
    }
};

