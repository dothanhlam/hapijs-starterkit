'use strict';
exports.plugin = {  
    pkg: require('../../../package.json'),
    name : 'apartment_types_routes',
    register: async (server, options) => {
        const Controllers = {
            apartmentTypes: {
                apartmentTypes: require('../../controllers/web/apartment-types')
            }
        };
        server.route([
            {
                method: 'GET',
                path: '/apartment-types',
                config: Controllers.apartmentTypes.apartmentTypes.showApartmentType
            }
        ]);
    }
};

