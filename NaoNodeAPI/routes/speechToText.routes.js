const router = require('express').Router();
const { speechToText } = require('../config');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'files/' });

router.post('/recognize', upload.single('audio'), (req, res) => {

    const recognizeParams = {
        audio: fs.createReadStream(req.file.path),
        content_type: 'audio/wav',
        model: 'en-US_BroadbandModel',
    }

    speechToText.recognize(recognizeParams, (err, result) => {
        if (err) {
            console.log(err);
            fs.unlink(req.file.path, (err) => {
                if (err) throw err;
            });
            res.send(err)
        } else {
            fs.unlink(req.file.path, (err) => {
                if (err) throw err;
            });
            console.log(JSON.stringify(result, null, 2))
            try {
                res.send(JSON.stringify({ response: result.results[0].alternatives[0].transcript }))
            } catch (err) {
                res.send(JSON.stringify({ response: "Sorry, I did not understand" }))
            }
        }
    })
});

module.exports = router;