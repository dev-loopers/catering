const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  {
    type:String,
    required:true
  },
  contact:{
    type:Number,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    required:true,
    default:"user_role"
  }
  
},{timestamps:true});


const UserModel = mongoose.model('UserModel',userSchema);

export default UserModel;
