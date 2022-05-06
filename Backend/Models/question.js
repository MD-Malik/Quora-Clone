
const mongoose = require('mongoose');

const question = new mongoose.Schema({
     "questionName": {type:String, required: true},
     "questionBy": { type: mongoose.Types.ObjectId, ref:'user'},
     "answers": [{type: mongoose.Types.ObjectId, ref:"answer"}],
})

module.exports = mongoose.model('question',question);
