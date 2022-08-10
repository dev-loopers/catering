const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'UserModel'
        
    },
    orderItems:[
        {
            qty:{
                type:Number,
                required:true
            },
            discount:{
                type:Number,
                required:false,
                default:00
            },
            dish:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'DishModel'
            }

        }
    ]
    
},{timestamps:true});


const OrderModel = mongoose.model('OrderModel',orderSchema);

export default OrderModel;