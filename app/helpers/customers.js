'use strict';

exports.getCustomersList = async function (request) {
    const {payload, server} = request;

    return new Promise(async function (resolve, reject) {
        try {
           
            const Customers = server.plugins['mysql'].db['Customers'];
            const customers = await User.findAll().map(el => el.get({ plain: true }));
    
            return resolve({
                statusCode: 200,
                customers
            });
        } catch (error) {
            console.log("error: ", error)
            return reject(error);
        }
    });
};