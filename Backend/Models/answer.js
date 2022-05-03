const mongoose = require('mongoose');


const answer = new mongoose.Schema({
     "answerId": {type: mongoose.Types.ObjectId, ref:'question' },
     "answers": [{"Images": {type: string},"content":{type: string, required: true}}],
     "answeredBy":  {type: mongoose.Types.ObjectId, required: true},
})

module.exports = mongoose.model('answer', answer);