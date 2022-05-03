const mongoose = require('mongoose');

const post = new mongoose.Schema({
    "postTitle": {type: string, required: true},
    "postAnswers": [{"Images": {type: string},"content":{type: string, required: true}}],
    "postedBy": { type: mongoose.Types.ObjectId, required: true},
    "upvote": {type: number}
})

module.exports = mongoose.model('post', post);

