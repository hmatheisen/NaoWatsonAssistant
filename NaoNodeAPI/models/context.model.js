const mongoose = require('mongoose');
const { Schema } = mongoose;

const contextSchema = new Schema({
    conversation_id: String,
    system: Object,
})

const Context = mongoose.model('context', contextSchema);

module.exports = Context;