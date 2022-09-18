const asyncHandler = require('express-async-handler');
const UserModel = require('../models/UserModel');
const {generateToken} = require('../utils/webToken');

// register new user 
const registerUser = asyncHandler(async (req,resp)=>{
    const {name,contact,email,username,password} = req.body;
    const userExist = await UserModel.findOne({$or:[
        {email},
        {username},
        {contact},
    ]});

    if(userExist){
        resp.status(400);
        throw new Error("User already exist by email or username  or contact please use another email or contact or uswername")
    }else{
        const newUser = await UserModel.create({name,contact,email,username,password}) ;
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
    const user = await UserModel.findOne({email});
    if (user && (await user.checkpassword(password))) {
        
        resp.cookie(String(user._id),generateToken(user._id),{
            path:'/',
            expires : new Date(Date.now() + 1000 * 30 ),
            httpOnly:true,
            sameSite:'lax'
        });
        resp.status(200).json({message:"loggin done",existingUser:user,token:generateToken(user._id)});
    } else {
        resp.status(404).json({message:"Invalid Crediantial"});
    }
   
});

// get user profile after authentication
const getProfile = asyncHandler(async (req,resp)=>{
    const user = await UserModel.findById(req.user._id,"-password");
    if(user){
        resp.json({
            user
            // _id : user._id,
            // name: user.name,
            // contact:user.contact,
            // email:user.email,
            // username:user.username,
            // role:user.role

        }); 

    }else{
        resp.status(404);
        throw new Error("User not found,please register with us")
    }

});

const refreshTocken = asyncHandler( async (req,resp)=>{

});

module.exports = {authController,getProfile,registerUser,refreshTocken};