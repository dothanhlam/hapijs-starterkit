'use strict';

const servicesHelper = require('../../helpers/services');

exports.showServices = {
    description: 'Show services page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    handler: async (request, h) => {
        if (request.auth.isAuthenticated) {
            //TODO: should take from request.server ...
            const services = servicesHelper.getServices(request);

            return h.view('services/services', services);
        }else{
            return h.redirect('/login');
        }
    },
};