const mongoose = require('mongoose');

const post = new mongoose.Schema({
    "title": {type: String, required: true},
    "userId": {type: Number},
    "comments": [{type: mongoose.Types.ObjectId, ref:"comment"}],
    "descriptionId": [{type: mongoose.Schema.Types.ObjectId, ref: 'description'}],
})

module.exports = mongoose.model('post', post);

