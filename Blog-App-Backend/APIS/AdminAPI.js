import exp from 'express'
export const adminRoute=exp.Router()
import { ArticleModel } from "../Models/ArticleModel.js"
import { UserTypeModel } from '../Models/UserModel.js';
//read all articles

//Block users
adminRoute.put('/block/:userid',async(req,res)=>{
    //userid from params
    let userId=req.params.userid
    //find user
    let userDoc=await UserTypeModel.findById(userId)
    if(!userDoc){
        res.status(404).json({message:"User not found"})
    }
    let blockUser=await UserTypeModel.findByIdAndUpdate(userId,{$set:{isActive:false}},{new:true})
    res.status(200).json({message:"BLocked User",payload:blockUser})
})



//unblock user roles
adminRoute.put('/unblock/:userid',async(req,res)=>{
    //userid from params
    let userId=req.params.userid
    //find user
    let userDoc=await UserTypeModel.findById(userId)
    if(!userDoc){
        res.status(404).json({message:"User not found"})
    }
    let unblockUser=await UserTypeModel.findByIdAndUpdate(userId,{$set:{isActive:true}},{new:true})
    res.status(200).json({message:"Unblocked User",payload:unblockUser})
})