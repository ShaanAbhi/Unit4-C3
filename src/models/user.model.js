 const mongoose = require("mongoose");
 const userSchema = new mongoose.Schema(
     {
         firstName:{ type:String, required:true},
         lastName:{type:String, required:false},
         age:{type:String, required:true},
         email:{type:String, required:true,unique:true},
         profileImages:{}
     },
     {
         versionKey:false,
         timestamps:true,
     }
 );

 

 module.exports = mongoose.model("user", userSchema)