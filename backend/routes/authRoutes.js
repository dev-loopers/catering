const express = require("express");

const router = express.Router()

router.get('/users',(req,resp)=>{
    resp.send('users api');
})

module.exports = router;