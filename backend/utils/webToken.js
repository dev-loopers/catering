const jwt = require('jsonwebtoken');

const generateToken = (args)=>{
    return jwt.sign({id:args},process.env.JWT_KEY,{expiresIn:'15days'})
}

module.exports = {generateToken};