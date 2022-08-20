const asyncHandler = require('express-async-handler');
const users = require('../models/UserModel');
const {generateToken} = require('../utils/webToken');

// register new user 
const registerUser = asyncHandler(async (req,resp)=>{
    const {name,contact,email,username,password} = req.body;
    const userExist = await users.findOne({$or:[
        {email},
        {username},
        {contact},
    ]});

    if(userExist){
        resp.status(400);
        throw new Error("User already exist by email or username  or contact please use another email or contact or uswername")
    }else{
        const newUser = await users.create({name,contact,email,username,password}) ;
        if (newUser){
            resp.json({"user":newUser,"msg":"user created"});
        }else{
            console.log("something went wrong");
        }
    }

});


// check user  authentication 
const authController = asyncHandler(async (req,resp)=>{
    const {email,password} = req.body;
    const user = await users.findOne({email});
    if (user && (await user.checkpassword(password))) {
        resp.send({"user":user.name,"token":generateToken(user._id)});
    } else {
        resp.send("login failed");
    }
   
});

// get user profile after authentication
const getProfile = asyncHandler(async (req,resp)=>{
    resp.send("profile page");

});

module.exports = {authController,getProfile,registerUser};