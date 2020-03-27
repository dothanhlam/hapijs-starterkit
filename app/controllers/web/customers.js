'use strict';

exports.showCustomers = {
    description: 'Show apartments page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    handler: async (request, h) => {
        if (request.auth.isAuthenticated) {
        //   var userDetails = request.auth.credentials;
          return h.view('customers/customers', {});
        }else{
            return h.redirect('/login');
        }
    },
};