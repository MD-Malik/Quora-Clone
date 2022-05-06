const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userController = require('../Controller/user')
const passportFacebook = require('../Authentication/facebookLogin');
const passportGoogle = require('../Authentication/googleLogin');
const user = require('../Models/user');
const cors = require('cors');
const { engine } = require('express-handlebars')

app.use(bodyParser.json([]))
app.use(passportGoogle.initialize());
app.use(cors())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

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


app.post('/post',userController.createPost);
app.get('/post', userController.getAllPost);
app.get('/descriptionInfo/:postId', userController.getDescription)

app.post('/uploadImage', userController.uploadImage)

module.exports = app;