const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});