const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    "comment_Id" :  {type: mongoose.Types.ObjectId, ref:'post' },
    "comment_Title": {type: String}
})

module.exports = mongoose.model('comment', comment)