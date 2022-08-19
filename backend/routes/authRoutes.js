const express = require("express");
const {authController} = require('../controller/userController');
const router = express.Router()

router.get('/users',(req,resp)=>{
    resp.send('users api');
})


router.route('/login').post(authController);
module.exports = router;