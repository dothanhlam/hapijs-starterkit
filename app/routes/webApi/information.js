'use strict';
exports.plugin = {  
    pkg: require('../../../package.json'),
    name : 'information_routes',
    register: async (server, options) => {
        const Controllers = {
            information: {
                information: require('../../controllers/web/information')
            }
        };
        server.route([
            {
                method: 'GET',
                path: '/information',
                config: Controllers.information.information.showInformation
            }
        ]);
    }
};

