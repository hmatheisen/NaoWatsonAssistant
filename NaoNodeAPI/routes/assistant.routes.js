const router = require('express').Router();
require('dotenv').config();

const { assistant } = require('../config');
const { mongoUpdateContext, findContext } = require('../helpers');

router.post('/message', (req, res) => {

    const params = {
        workspace_id: process.env.ASSISTANT_WORKSPACE_ID,
        input: {
            text: req.body.text
        },
        context: findContext()
    }

    assistant.message(params, (err, response) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(JSON.stringify({response: response.output.text[0]}));
            mongoUpdateContext(response.context);
            console.log(response);
        }
    });
});

module.exports = router;