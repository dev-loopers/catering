const asyncHandler = require('express-async-handler');
const users = require('../models/UserModel');


const authController = asyncHandler(async (req,resp)=>{
    const {email,password} = req.body;
    const user = await users.findOne({email});
    if (user && (await user.checkpassword(password))) {
        resp.send({"user":user.name});
    } else {
        resp.send("login failed");
    }
   
});


module.exports = {authController};