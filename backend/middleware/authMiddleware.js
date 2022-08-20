const jwt = require('jsonwebtoken');


const protectRoute = async (req,resp,next)=>{
    let token;
    if (req.headers.authorization) {
        try {
            token = req.headers.authorization;
            const decode = jwt.verify(token,process.env.JWT_KEY);
            console.log(decode);
            next();
        } catch (error) {
            resp.status(404);
           throw new Error({"error":"invalid token"});
            
        }
        if(!token){
            resp.status(404);
            throw new Error(error);
        }
        
    }
    console.log();
    next();
}


module.exports = {protectRoute};