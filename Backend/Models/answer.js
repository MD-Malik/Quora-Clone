const mongoose = require('mongoose');

const answer = new mongoose.Schema({
     "questionId": {type: mongoose.Types.ObjectId, ref:'question' },
     "answers": { 
          image: {type:String},
          content : {type: String}},
     "answeredBy":  {type: mongoose.Types.ObjectId, ref:'user'},
})

module.exports = mongoose.model('answer', answer);