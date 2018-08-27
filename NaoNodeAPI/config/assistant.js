const Assistant = require('watson-developer-cloud/assistant/v1');
require('dotenv');

const assistant = new Assistant({
    username: process.env.ASSISTANT_USERNAME,
    password: process.env.ASSISTANT_PASSWORD,
    version: '2018-07-10'
})

module.exports = assistant;