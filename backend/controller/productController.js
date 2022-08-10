const asyncHandler = require('express-async-handler');
const products  = require('../models/DishModel');

const getDishes = asyncHandler(async (req, resp) => {
    const dishes = await products.find({});
    resp.json(dishes);
});


const getDish = asyncHandler(async (req,resp)=>{
    const dishes = await products.findById(req.params.id);
    if (dishes){
        resp.json(dishes);
    }else{
        resp.status(404).json({message:"No product found..."})
    }
});

module.exports = {getDishes,getDish};