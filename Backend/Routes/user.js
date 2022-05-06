const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userController = require('../Controller/user')
const postController = require('../Controller/post')
const passportFacebook = require('../Authentication/facebookLogin');
const passportGoogle = require('../Authentication/googleLogin');
const user = require('../Models/user');
const cors = require('cors');

app.use(bodyParser.json([]))
app.use(passportGoogle.initialize());
app.use(cors())




app.get('/getAllUsers', userController.getAllUsers)

app.post('/register', userController.registerUser);

app.post('/signIn', userController.signIn)

app.delete('/logout/:token', userController.logout)

app.get('/', userController.loginUsingFacebookSuccess)

app.get('/login', (req, res, next)=>{
    res.send("failed");
})

app.get('/auth/facebook',
  passportFacebook.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
  userController.loginUsingFacebook);



  app.get('/failed', (req,res)=>{
      res.send("Some error occured while logging in to google")
  })
  
  app.get('/success', (req, res)=>{
      res.send("Successfully logged in to google")
  })
  
  app.get('/google', passportGoogle.authenticate('google',{
      scope:
      ['email', 'profile']
  }
  ));
  
  app.get('/google/callback',
     passportGoogle.authenticate('google', {
         failureRedirect: '/failed',
     }),
     userController.loginUsingGoogle
  );

  app.post('/forgotPassword', userController.forgotPassword)

  app.post('/emailConfirmation', userController.emailConfirmation)

  app.post('/resetPassword', userController.resetPassword)

  app.get('/user/:token', userController.getUserByToken)

  app.get('/verifyToken/:token', userController.verifyToken)


app.post('/post',postController.createPost);
app.get('/post', postController.getAllPost);
app.post('/postQuestion', postController.createQuestion);
app.get('/allQuestion',postController.getAllQuestion);
app.post('/addAnswer', postController.addAnswer);

module.exports = app;