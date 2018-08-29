const router = require('express').Router();
const { visualRecognition } = require('../config');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'files/' });
require('dotenv').config();

router.post('/classify', upload.single('image'), (req, res) => {

    const params = {
        image_file: fs.createReadStream(req.file.path),
        classifier_ids: process.env.VISUAL_RECOGNITION_CLASSIFIER_ID,
        threshold: 0.7
    }

    visualRecognition.classify(params, (err, response) => {
        fs.unlink(req.file.path, err => {
            if (err) throw err;
        });

        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(JSON.stringify(response, null, 2));
            try {
                res.send(JSON.stringify({ response: response.images[0].classifiers[0].classes[0].class }));
            } catch (err) {
                res.send(JSON.stringify({ response: "I don't know what it is." }));
            }
        }
    });
});

router.post('/faces', upload.single('image'), (req, res) => {

    const params = {
        image_file: fs.createReadStream(req.file.path)
    }

    visualRecognition.detectFaces(params, (err, response) => {
        fs.unlink(req.file.path, err => {
            if (err) throw err;
        });

        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(JSON.stringify(response, null, 2));
            try {
                res.send(JSON.stringify({ response: response.images[0].faces[0].gender.gender }));
            } catch (err) {
                res.send(JSON.stringify({ response: "NA" }));
            }
        }
    });
});

module.exports = router