'use strict';

exports.showDepartments = {
    description: 'Show departments page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    handler: async (request, h) => {
        if (request.auth.isAuthenticated) {
        //   var userDetails = request.auth.credentials;
          return h.view('departments/departments', {});
        }else{
            return h.redirect('/login');
        }
    },
};