const express = require("express");
const {authController,getProfile,registerUser,refreshTocken} = require('../controller/userController');
const router = express.Router()
const {protectRoute} = require('../middleware/authMiddleware');

router.get('/users',(req,resp)=>{
    resp.send('users api');
})

router.route('/register').post(registerUser);
router.route('/login').post(authController);
router.route('/profile').get(protectRoute,getProfile);
router.route('/retocken').get(refreshTocken);

module.exports = router;