const SpeechToText = require('watson-developer-cloud/speech-to-text/v1');
require('dotenv').config();

const speechToText = new SpeechToText({
    username: process.env.STT_USERNAME,
    password: process.env.STT_PASSWORD,
    url: 'https://stream-fra.watsonplatform.net/speech-to-text/api'
})

module.exports = speechToText;