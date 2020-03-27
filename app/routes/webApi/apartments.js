'use strict';
exports.plugin = {  
    pkg: require('../../../package.json'),
    name : 'apartments_routes',
    register: async (server, options) => {
        const Controllers = {
            apartments: {
                apartments: require('../../controllers/web/apartments')
            }
        };
        server.route([
            {
                method: 'GET',
                path: '/apartments',
                config: Controllers.apartments.apartments.showApartments
            }
        ]);
    }
};

