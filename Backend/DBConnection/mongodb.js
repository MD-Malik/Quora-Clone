const mongoose = require('mongoose');

class mongo{
    constructor(){
        this.mongodbconnection()
    }

    mongodbconnection(){
        mongoose.connect('mongodb+srv://shahrukh:2012@cluster0.ndx7a.mongodb.net/QuoraDB?retryWrites=true&w=majority')
        mongoose.connection.once('open', ()=>{
            console.log('MongoDB is Connected');
        })
        mongoose.connection.on('error', ()=>{
            console.log("error in mongodb connection")
        })
    }
}


module.exports = mongo;