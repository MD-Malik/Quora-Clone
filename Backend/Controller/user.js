const userModel = require('../Models/user');
const tokenModel = require('../Models/token');
const encryptDecrypt = require('../CommonLib/encryption-decryption');
const JWTService = require('../CommonLib/JWTtoken');
const emailService = require('../Notification/emailService')

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
        localStorage.setItem("current_user", JSON.stringify({token}))
        res.status(200).json(
            {
                message: "Success login",
                token
            }
        )
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
        HttpContext.Current.Response.Cookies["token"].Value = token;

        res.status(200).json(
            {
                message : "Registration Success",
                token
            })
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
        let token = JWTService.generateToken({...response});
        await tokenModel.insertMany([{userid : response._id, token}])
        res.json({
         message : "LogIn Successfull",
         token
     })
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

        res.json({
            message : "SignUp Successfull",
            token
        })
    }
}

async function forgotPassword(req, res, next){
    let useremail = req.body.useremail;
    let randomNumber = Math.round(Math.random(10)*1000000);
    let response = await userModel.updateOne({useremail},{$set:{password : `${randomNumber}`}});
    if(!response){
        res.json({status : "failed ", message : "Invalid password"})
    }    

    await emailService.sendMail({

        from: '"Quora.com" <noreply@gamil.com>', // sender address
        to: `${useremail}`, // list of receivers
        subject: "Pawword reset mail", // Subject line
        text: `${req.body.username}, please comfirm your email`, // plain text body
        html: `<h2>  ${userDetails.username}, Your email confirmation code ${randomNumber}</h2>`, // html body
    });
    
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
    res.json({status : "Success", message : "Code Confirmed", userid : response.userid})
}

async function resetPassword(req, res, next){
    let new_password = req.body.password;
    let userid = req.body.userid;
    await userModel.updateOne({_id : userid},{$set:{password : new_password}});
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

module.exports = {
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