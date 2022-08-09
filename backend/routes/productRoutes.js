const express = require('express');
const { model } = require('mongoose');

const router = express.Router()


router.get('/products',(req,resp)=>{

    resp.send('products list');
});


module.exports = router;