'use strict';
const bcrypt = require('bcrypt');

exports.findByCredentials = async function (request) {
    const {payload, server} = request;
    const {email, password} = payload;

    return new Promise(async function (resolve, reject) {
        try {
            var query = {};
            if (email.indexOf('@') > -1) {
                query.email = email.toLowerCase();
            } else {
                query.username = email.toLowerCase();
            }
        
            const User = server.plugins['mysql'].db['User'];
            const user = await User.findAll({where: query}).map(el => el.get({ plain: true }));
            const hasingPass = await bcrypt.hash(password, bcrypt.genSaltSync(12));
            console.log("hashing: ", hasingPass)
          /*
            if (!user[0] || !matching) {
                return resolve({
                    statusCode: 401,
                    message: 'Invalid username or password'
                });
            } */

            return resolve({
                statusCode: 200,
                user: user
            });
        } catch (error) {
            console.log("error: ", error)
            return reject(error);
        }
    });
};