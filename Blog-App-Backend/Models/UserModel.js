import mongoose from "mongoose";
import {Schema,model} from "mongoose";

const userSchema=new Schema({
    firstname:{
        type:String,
        required:[true,"first name is required"]
    },
     lastname:{
        type:String,
     },
     password:{
        type:String,
        required:[true,"password is required"]
     },
     email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exisited"]
     },
     profileImageUrl:{
        type:String,
     },
     role:{
        type:String,
        enum:["AUTHOR","USER","ADMIN"],
        required:[true,"{value}is an Invalid role"],
     },
     isActive:{
        type:Boolean,
        default:true,
   
  },
},{
    timeStamps:true,
    strict:"throws",
    versionKey:false
});

//create model
export const UserTypeModel=model("user",userSchema)