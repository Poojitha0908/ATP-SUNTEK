import exp from "express"
import {UserModel} from '../models/userModel.js'
export const userApp=exp.Router()


//create User
userApp.post('/users',async(req,res)=>{
    //get newuser from req
    let newUser=req.body;
    //create new user doc
    let newuserDoc=new UserModel(newUser)
    //save in db
    await newuserDoc.save()
    //send res
    res.status(201).json({message:"user created"})
})

//read user
userApp.get('/users',async(req,res)=>{
    //read users from db
    let users= await UserModel.find()
    //
    res.status(200).json({message:"users",payload:users})
})

 //read user by object id
 userApp.get("/users/:id",async(req,res)=>{
    //get objectid from url param
    let objId=req.params.id;
    //fond user in DB
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
 })

 //update user
 userApp.put("/users/:id",async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id;
    //get modified user from req
    let modifiedUser=req.body;
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true});
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})
 })

 //Delete user
 userApp.delete("/users/:id",async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id;
    //delete user by id
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user removed",payload:deletedUser})
 })