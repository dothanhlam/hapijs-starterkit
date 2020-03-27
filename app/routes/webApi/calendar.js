'use strict';
exports.plugin = {  
    pkg: require('../../../package.json'),
    name : 'calendar_routes',
    register: async (server, options) => {
        const Controllers = {
            calendar: {
                calendar: require('../../controllers/web/calendar')
            }
        };
        server.route([
            {
                method: 'GET',
                path: '/calendar',
                config: Controllers.calendar.calendar.showCalendar
            }
        ]);
    }
};

