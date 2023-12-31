const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const userController = require('../Controller/user')
const postController = require('../Controller/post')
const passportFacebook = require('../Authentication/facebookLogin');

const cors = require('cors');
const { engine } = require('express-handlebars')

const googleOuth = require("../Authentication/googleLogin");
const user = require("../Models/user");

const passportGoogle = require("../Authentication/googleLogin");


app.use(bodyParser.json([]));
app.use(googleOuth.initialize());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.get("/getAllUsers", userController.getAllUsers);

app.post("/register", userController.registerUser);

app.post("/signIn", userController.signIn);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.delete("/logout/:token", userController.logout);

app.get("/", userController.loginUsingFacebookSuccess);

app.get("/login", (req, res, next) => {
  res.send("failed");
});

app.get("/auth/facebook", passportFacebook.authenticate("facebook"));

app.get(
  "/auth/facebook/callback",
  passportFacebook.authenticate("facebook", { failureRedirect: "/login" }),
  userController.loginUsingFacebook
);

app.get("/failed", (req, res) => {
  res.send("Some error occured while logging in to google");
});

app.get("/success", (req, res) => {
  res.send("Successfully logged in to google");
});

app.get(
  "/google",
  googleOuth.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get(
  "/google/callback",
  googleOuth.authenticate("google", {
    failureRedirect: "/failed",
  }),
  userController.loginUsingGoogle
);

app.post("/forgotPassword", userController.forgotPassword);

app.post("/emailConfirmation", userController.emailConfirmation);

app.post("/resetPassword", userController.resetPassword);

app.get("/user/:token", userController.getUserByToken);

app.get("/verifyToken/:token", userController.verifyToken);

app.post('/post', postController.createPost);
app.get('/post', postController.getAllPost);
app.post('/postQuestion', postController.createQuestion);
app.get('/allQuestion', postController.getAllQuestion);
app.post('/addAnswer', postController.addAnswer);

app.post('/uploadImage', userController.uploadImage)

module.exports = app;
