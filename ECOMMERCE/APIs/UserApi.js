import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ProductModel } from '../models/PoductModel.js'
import {hash} from 'bcryptjs'
export const userRoute=exp.Router()
//route to create user
/*userRoute.post("/users",async(req,res)=>{
    //get user from req
    let userObj=req.body
    //run validator
     await new UserModel(userObj).validate();
    //hash password
    let hashedPassword=await hash(userObj.password,10)
    //replace plain password with hashed password
    userObj.password=hashedPassword
    let userDocument=new UserModel(userObj)
    await userDocument.save({validateBeforeSave:false})
    res.status(201).json({Message:"user created"})
});
//add product to users cart
userRoute.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
//read uid and pid from url parameters
    let {uid,pid}=req.params;
    //check user
    let user=await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({Message:"user not found"})
    }
    //check product
     let product=await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({Message:"product not found"})
    }
    //perform update
    let modifiedUser=await UserModel.findByIdAndDelete(uid,
        {$push:{"cart":{product:pid}}},
        {new:true}).populate("cart.product")
        return res.status(200).json({Message:"productis added to cart",payload:modifiedUser})
});
//read user by id
userRoute.get("/users/:uid",async(req,res)=>{
    let {uid}=req.params;

    //find
    let userObj=await UserModel.findById(uid).populate("cart.product","productName price")
    return res.status(200).json({Message:"user",payload:userObj})

})*/

//route to create user
userRoute.post("/users",async(req,res)=>{
    //get user from req
    let userObj=req.body
    //run validator
     await new UserModel(userObj).validate();
    //hash password
    let hashedPassword=await hash(userObj.password,10)
    //replace plain password with hashed password
    userObj.password=hashedPassword
    let userDocument=new UserModel(userObj)
    await userDocument.save({validateBeforeSave:false})
    res.status(201).json({Message:"user created"})
});
userRoute.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
    //read url parameters
    let {uid,pid}=req.params
    //check user
    let user=await UserModel.findById(uid)
    if(!uid){
        return res.status(401).json({message:"User not found"})
    }
    //check product
    let product=await ProductModel.findById(pid)
    if(!pid){
        return res.status(401).json({message:"Product not found"})
    }
    //if product already in cart increament
    //check if product exists or not
    let modifiedUser = user.cart.find(ele=>ele.product.toString() === pid)
    if(modifiedUser){
        modifiedUser.quantity += 1
    }
    else{
        user.cart.push({product:pid,quantity:1})
    }
    await user.save()
    //res
    res.status(200).json({message:"product added",payload:modifiedUser})
});
userRoute.get("/compare/:pid",async(req,res)=>{
let productId=new Types.ObjectId(req.params.pid)
    //get product
    let prod=await ProductModel.findById(productId)
    if(productId===prod.id){
        console.log("eq")
    }else{
        console.log("ne")
    }
});