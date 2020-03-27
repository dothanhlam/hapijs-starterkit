'use strict';

exports.showCalendar = {
    description: 'Show calendar page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    handler: async (request, h) => {
        if (request.auth.isAuthenticated) {
        //   var userDetails = request.auth.credentials;
          return h.view('calendar/calendar', {});
        }else{
            return h.redirect('/login');
        }
    },
};