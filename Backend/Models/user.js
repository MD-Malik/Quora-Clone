const mongoose  = require('mongoose');

const user = mongoose.Schema({
    username : { type : String, required : true},
    useremail : { type : String , required : true},
    password : { type : String, required : true},
    userimage : { type : String, required : true}
})

module.exports = mongoose.model('user', user);