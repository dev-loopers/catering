const asyncHandler = require('express-async-handler');
const itemModel = require('../models/ItemModel');


const addItem = asyncHandler( async (req,resp)=>{
    const {name, categories , is_veg,belongs} = req.body;
    const itemexist = await itemModel.findOne({name:name}) ;
    if(itemexist){
        resp.status(400);
        throw new Error("this item is already exists")
    }else{
        const newItem=   await itemModel.create({name,categories, is_veg,belongs});
        if(newItem){
            resp.json({"msg":"New item created"});
        }else{
            resp.status(404);
            throw new Error("Unable to add new item");
        }
    }
});

const getItemBySearch = asyncHandler( async(req,resp) => {
    const {itemname} = req.body;
    const data = await itemModel.find({$or:[
        {name:{$regex:itemname}},
        {categories:{$regex:itemname}},
        {belongs:{$regex:itemname}}
    ]})
    resp.json({data});
});

module.exports = {addItem , getItemBySearch};