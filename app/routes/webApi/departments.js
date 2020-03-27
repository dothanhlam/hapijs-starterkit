'use strict';
exports.plugin = {  
    pkg: require('../../../package.json'),
    name : 'departments_routes',
    register: async (server, options) => {
        const Controllers = {
            departments: {
                departments: require('../../controllers/web/departments')
            }
        };
        server.route([
            {
                method: 'GET',
                path: '/departments',
                config: Controllers.departments.departments.showDepartments
            }
        ]);
    }
};

