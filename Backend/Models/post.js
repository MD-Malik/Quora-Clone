const mongoose = require('mongoose');

const post = new mongoose.Schema({
    "title": {type: String, required: true},
    "userId": { type: mongoose.Types.ObjectId, ref:'user'},
    "comments": [{type: mongoose.Types.ObjectId, ref:"comment"}],
    "descriptions":{
        image: {type:String},
        content : {type: String}
    }
})

module.exports = mongoose.model('post', post);

