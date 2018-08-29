const router = require('express').Router();
const { assistant } = require('../config');
require('dotenv').config();

router.post('/message', (req, res) => {

    const params = {
        workspace_id: process.env.ASSISTANT_WORKSPACE_ID,
        input: {
            text: req.body.text
        }
    }

    assistant.message(params, (err, response) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(JSON.stringify({response: response.output.text[0]}));
            console.log(response);
        }
    });
});

module.exports = router;