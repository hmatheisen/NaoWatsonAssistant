const { Context } = require('../models');

const updateContext = context => {

    Context.findOneAndUpdate({}, {
        conversation_id: context.conversation_id,
        system: context.system,
    }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
        }
    });
}

module.exports = updateContext;