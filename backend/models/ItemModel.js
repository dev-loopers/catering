const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    dish:{
        type:mongoose.Schema.Types.ObjectId,
        require:false,
        default:null,
        ref:'DishModel'
    },
    name:{
        type:String,
        require:true
    },
    categories:String,
    is_veg:{
        type:Boolean,
        required:true,
        default:true
    },
    belongs:String
},{timestamps:true});


const itemModel = mongoose.model('itemModel',itemSchema);
module.exports = itemModel;