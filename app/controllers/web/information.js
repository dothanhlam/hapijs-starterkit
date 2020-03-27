'use strict';

exports.showInformation = {
    description: 'Show information page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    handler: async (request, h) => {
        if (request.auth.isAuthenticated) {
        //   var userDetails = request.auth.credentials;
          return h.view('information/information', {});
        }else{
            return h.redirect('/login');
        }
    },
};