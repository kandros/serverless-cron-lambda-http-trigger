'use strict';

const axios = require('axios');

module.exports.run = (event, context, callback) => {
    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);
    
    console.log(`calling ${process.env.URL}`)
    axios.get(process.env.URL)
        .then(function () {
            console.log('ok');
            callback(null, 'ok')
        })
        .catch(function (error) {
            console.log(error);
            callback(error)
        });
};