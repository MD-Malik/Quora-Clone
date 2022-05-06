
const postModel = require('../Models/post');
const questionModel = require('../Models/question');
const descriptionModel = require('../Models/description');
const userModel = require('../Models/user');
const tokenModel = require('../Models/token');
const encryptDecrypt = require('../CommonLib/encryption-decryption');
const JWTService = require('../CommonLib/JWTtoken');
const emailService = require('../Notification/emailService');
const { getMaxListeners } = require('../Models/post');

async function registerUser(req, res, next){
    
    let response = await userModel.findOne({useremail : req.body.useremail});

    if(response){
        res.json({status : "failed", message : "user already exist"});
        return;
    }

    const encryptedPassword = encryptDecrypt.encryptPassword(req.body.password);
    let userDetails = {
        ...req.body,
        userimage : "https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png",
        password : encryptedPassword
    }
    await userModel.insertMany([userDetails]);
    let response2 = await userModel.findOne({useremail : req.body.useremail});
    const token = JWTService.generateToken(userDetails);
    await tokenModel.insertMany([{userid : response2._id, token}])

    let response3 = await emailService.sendMail({

        from: '"Quora.com" <noreply@gamil.com>', // sender address
        to: `${req.body.useremail}`, // list of receivers
        subject: "Welcome message from Quora.com", // Subject line
        text: `Welcome ${req.body.username}`, // plain text body
        html: `<h2> Welcome ${req.body.username} you have been successfully registered to quora.com</h2>`, // html body
    });

    res.json({status : "success", message : "User successfully registerd", token: token})
}

async function signIn(req, res, next){
    const response = await userModel.findOne({useremail : req.body.useremail});
    // console.log(req.body)
    if(!response){
        res.json({status : "failed", message:"User is not Registered"});
        return;
    }
    const decryptedPassword = encryptDecrypt.decryptPassword(req.body.password, response.password);
    if(!decryptedPassword){
        res.json({status : "failed", message : "Invalid Password"})
        return;
    }
    const token = JWTService.generateToken({...response});
    await tokenModel.insertMany([{ userid : response._id, token}]);
    res.json({status : "success", token});
}

async function logout(req, res, next){
    const token = req.params.token;
    await tokenModel.deleteOne({token});
    res.json({status : "success", message : "logout successfully"})
}

function loginUsingFacebookSuccess(req, res, next){
    res.send("Success")
}

async function loginUsingFacebook(req, res, next){
    console.log(req.user);
    const useremail = req.user._json.email;
    const userDetails = await userModel.findOne({useremail})
    if(userDetails){
        let token = JWTService.generateToken({...userDetails});
        await tokenModel.insertMany([{userid : userDetails._id, token}]);
        // localStorage.setItem("current_user", JSON.stringify({token}))
        // res.status(200).json(
            // {
            //     message: "Success login",
            //     token
            // }
            
        // )
        res.render('home', {name: "Facebook LogIn", token});
    }
    else{

        const resObject = {
            username : req.user._json.name,
            useremail : req.user._json.email,
            password : "NA",
            userimage : req.user._json.picture.data.url
        }
        let response = await userModel.insertMany([resObject]);

        let token = JWTService.generateToken(resObject);
        await tokenModel.insertMany([{userid : response[0]._id, token}])

        let response3 = await emailService.sendMail({

            from: '"Quora.com" <noreply@gamil.com>', // sender address
            to: `${resObject.useremail}`, // list of receivers
            subject: "Welcome message from Quora.com", // Subject line
            text: `Welcome ${resObject.username}`, // plain text body
            html: `<h2> Welcome ${resObject.username} you have been successfully registered to quora.com</h2>`, // html body
        });
        // HttpContext.Current.Response.Cookies["token"].Value = token;

        // res.status(200).json(
        //     {
        //         message : "Registration Success",
        //         token
        //     })
        res.render('home', {name: "Facebook LogIn", token});
    }

    
}

async function loginUsingGoogle(req, res){
    console.log(req.user._json);
    let username = req.user._json.name;
    let useremail = req.user._json.email;
    let password = `${Math.random(100)}${username}${Math.random(100)}${useremail}${Math.random(100)}`;
    let userimage = req.user._json.picture;

    let response = await userModel.findOne({useremail})

    if(response){
        const token = JWTService.generateToken({...response});
        await tokenModel.insertMany([{userid : response._id, token}])
        res.render('home', {name: "Google SignIn", token});
    }
    else{
        let userDetails = {
            username,
            useremail,
            password,
            userimage
        }
        let token = JWTService.generateToken(userDetails);
        let response1 = await userModel.insertMany([userDetails]);
        await tokenModel.insertMany([{userid : response1[0]._id, token}])

        let response4 = await emailService.sendMail({

            from: '"Quora.com" <noreply@gamil.com>', // sender address
            to: `${userDetails.useremail}`, // list of receivers
            subject: "Welcome message from Quora.com", // Subject line
            text: `Welcome ${userDetails.username}`, // plain text body
            html: `<h2> Welcome ${userDetails.username} you have been successfully registered to quora.com</h2>`, // html body
        });
        console.log(response4)
        res.render('home', {name: "Google SignUp", token});
    }
}

async function forgotPassword(req, res, next){
    let useremail = req.body.useremail;
    if(useremail=='' || useremail.trim().split("@")[1]!="gmail.com"){
        res.json({status : "failed", message : "Invalid email" })
        return;
    }
     let userDetails = await userModel.findOne({useremail})
    if(!userDetails){
        res.json({status : "failed", message : "Invalid email" })
        return;
    }
    let randomNumber = Math.round(Math.random(10)*1000000);
     await userModel.updateOne({useremail},{$set:{password : `${randomNumber}`}});
    

    await emailService.sendMail({
        from: '"Quora website" <noreply@gamil.com>', // sender address
        to: `${useremail}`, // list of receivers
        subject: "Password reset mail", // Subject line
        text: `${userDetails.username}, please comfirm your email`, // plain text body
        html: `<h2>  ${userDetails.username}, Your email confirmation code is ${randomNumber}</h2>`, // html body
    });
    res.json({status : "success"})
    
}

async function emailConfirmation(req, res, next){
    let usercode = req.body.usercode;
    let useremail = req.body.useremail;
    let response = await userModel.findOne({useremail});
    if(!response){
        res.json({status : "failed", message : "Invalid email"})
    }
    if(response.password!=usercode){
        res.json({status : "failed", message :"Wrong Confirmation code"})
    }
    res.json({status : "Success", message : "Code Confirmed", userid : response._id})
}

async function resetPassword(req, res, next){
    let new_password = req.body.password;
    let userid = req.body.userid;
    let encryptedPassword = encryptDecrypt.encryptPassword(new_password)
    await userModel.updateOne({_id : userid},{$set:{password : encryptedPassword}});
    res.json({status : "Success", message : 'Password Reset Done'})
}

async function getAllUsers(req, res, next){
    let response = await userModel.find({});
    res.json(response);
}

async function verifyToken(req, res, next){
    let token = req.params.token;
    let response = await tokenModel.findOne({token})
    if(!token || !response){
        res.json({status : "failed", isAuth: false})
        return;
    }
    let response2 = JWTService.verifyToken(token)
    if(!response2){
        res.json({status : "failed", isAuth : false})
        return;
    }
    res.json({status : "success", isAuth: true});
}

async function getUserByToken(req, res, next){
    let token = req.params.token;
    let response1 = await tokenModel.findOne({token});
    let response2 = await userModel.findOne({_id: response1.userid});
    res.json(response2);
}

async function createPost(req, res, next){
    try{
        let post = req.body;
        let response = await postModel.insertMany([post]);
        let descriptioninfo = {
            postId: response[0]._id,
            title: req.body.description.title,
            images: req.body.description.images
        }
        console.log(descriptioninfo);
        await descriptionModel.insertMany([descriptioninfo]);
        console.log(response);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

async function getAllPost(req,res,next){
    try{
        let response = await postModel.find({}).populate('descriptionId');
        console.log(response);
        res.json(response)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

async function getDescription(req,res,next){
    try{
        console.log(req.params);
        let response = await descriptionModel.find({ postId: mongoose.Types.ObjectId(req.params.postId)}).populate('postId');
        res.json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

async function  createQuestion(req, res, next){
    try{
        let question = req.body;
        let response = await questionModel.insertMany([question]);
        console.log(response);
        res.json(response)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createPost,
    getAllPost,
    createQuestion,
    getDescription,
    registerUser,
    signIn,
    logout,
    loginUsingFacebook,
    loginUsingFacebookSuccess,
    loginUsingGoogle,
    forgotPassword,
    emailConfirmation,
    resetPassword,
    getAllUsers,
    verifyToken,
    getUserByToken
}