import mongoose from 'mongoose';


const dishSchema = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'UserModel'
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:false,
        default:0
    },
    image:{
        type:String,
        required:true
    },
    categories:String,
    is_veg:{
        type:Boolean,
        required:true,
        default:true
    },
    description:{
        type:String,
        required:false
    }

},{timestamps:true});

const DishModel = mongoose.model('DishModel',dishSchema);

export default DishModel;