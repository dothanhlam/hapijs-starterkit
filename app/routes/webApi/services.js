'use strict';
exports.plugin = {  
    pkg: require('../../../package.json'),
    name : 'services_routes',
    register: async (server, options) => {
        const Controllers = {
            services: {
                services: require('../../controllers/web/services')
            }
        };
        server.route([
            {
                method: 'GET',
                path: '/services',
                config: Controllers.services.services.showServices
            }
        ]);
    }
};

