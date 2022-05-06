
const mongoose = require('mongoose');

const description = new mongoose.Schema({
    "postId": {type: mongoose.Schema.Types.ObjectId, ref: 'post'},
    "title": {type: String},
    "images": {type: String}
})

module.exports = mongoose.model('description', description);