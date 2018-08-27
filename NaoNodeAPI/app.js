const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { speechToTextRoutes, assistantRoutes } = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/speech-to-text', speechToTextRoutes);
app.use('/api/assistant', assistantRoutes);

module.exports = app;