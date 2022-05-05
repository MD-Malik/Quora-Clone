const http = require('http');
const app = require('./Routes/user')
const port = 9008;
const mongodbconnection = require('./DBConnection/mongodb')

http.createServer(app).listen(port, ()=>{
    new mongodbconnection();

    console.log(`Server is running on port no. ${port}`)
})