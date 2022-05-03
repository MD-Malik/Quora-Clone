
const mongoose = require('mongoose');

const question = new mongoose.Schema({
     "questionName": {type:String, required: true},
     "questionBy": { type: mongoose.Types.ObjectId, required: true }
})

module.exports = mongoose.model('question',question);
