const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userController = require('../Controller/user')

app.use(bodyParser.json([]))

app.get('/', userController.getAllUser);

app.post('/post',userController.createPost);
app.get('/post', userController.getAllPost);
app.get('/descriptionInfo/:postId', userController.getDescription)

module.exports = app;