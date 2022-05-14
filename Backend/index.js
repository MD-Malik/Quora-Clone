const http = require('http');
const app = require('./Routes/user')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT;
const mongodbconnection = require('./DBConnection/mongodb')

http.createServer(app).listen(port, ()=>{
    new mongodbconnection();

    console.log(`Server is running on port no. ${port}`)
})