'use strict';

exports.getServices = async function (request) {
    return new Promise(async function (resolve, reject) {
        try {
            const services = [
                {
                    id: '0',
                    service: 'General home maintenance services',
                    status: 'avaiable',
                    usage: '3'
                },
                {
                    id: '2',
                    service: 'repairing services',
                    status: 'avaiable',
                    usage: '3'
                },
                {
                    id: '1',
                    service: 'Home massage',
                    status: 'avaiable',
                    usage: '3'
                },
            ];

            return resolve(services);
        }
        catch (error) {
            return reject(error);
        }
    });
}