const VisualRecognition = require('watson-developer-cloud/visual-recognition/v3');
require('dotenv').config()

const visualRecognition = new VisualRecognition({
    url: 'https://gateway-a.watsonplatform.net/visual-recognition/api',
    version: '2018-03-19',
    api_key: process.env.VISUAL_RECOGNITION_API_KEY,
})

module.exports = visualRecognition;