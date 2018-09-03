const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/mongo');

const { speechToTextRoutes, assistantRoutes, visualRecognitionroutes } = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/speech-to-text', speechToTextRoutes);
app.use('/api/assistant', assistantRoutes);
app.use('/api/visual-recognition', visualRecognitionroutes);

module.exports = app;