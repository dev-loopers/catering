const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
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

 userSchema.methods.checkpassword = async function(upass){
    return await bcrypt.compare(upass,this.password);
 }

const UserModel = mongoose.model('UserModel',userSchema);

module.exports =  UserModel;
