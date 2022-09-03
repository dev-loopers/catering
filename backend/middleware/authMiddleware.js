const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const UserModel = require('../models/UserModel');


const protectRoute =asyncHandler( async (req,resp,next)=>{
    let token;
    if (req.headers.authorization) 
        try {
            token = req.headers.authorization;
            const decode = jwt.verify(token,process.env.JWT_KEY);
           
            req.user = await UserModel.findById(decode.id).select('-password');
            next();
        } catch (error) {
            resp.status(404);
           throw new Error({"error":"invalid token"});
            
        }
        if(!token){
            resp.status(404);
            throw new Error("Unauthorized access");
        }
        
   

});


module.exports = {protectRoute};