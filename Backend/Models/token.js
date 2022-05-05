const mongoose = require('mongoose');

const token = mongoose.Schema({
    userid : { type : String, required: true},
    token : { type : String, required : true}
})

module.exports = mongoose.model('token', token)