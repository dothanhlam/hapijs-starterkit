'use strict';

exports.showApartmentType = {
    description: 'Show apartment type page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    handler: async (request, h) => {
        if (request.auth.isAuthenticated) {
        //   var userDetails = request.auth.credentials;
          return h.view('apartments/apartment-types', {});
        }else{
            return h.redirect('/login');
        }
    },
};