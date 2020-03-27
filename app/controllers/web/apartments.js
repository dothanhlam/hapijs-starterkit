'use strict';

exports.showApartments = {
    description: 'Show apartments page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    handler: async (request, h) => {
        if (request.auth.isAuthenticated) {
        //   var userDetails = request.auth.credentials;
          return h.view('apartments/apartments', {});
        }else{
            return h.redirect('/login');
        }
    },
};