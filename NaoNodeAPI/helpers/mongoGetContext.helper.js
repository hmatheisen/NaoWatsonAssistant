const { Context } = require('../models');

const findContext = () => {
    Context.find({}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            return doc
        }
    });
}

module.exports = findContext;