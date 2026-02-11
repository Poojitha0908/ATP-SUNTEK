import exp from 'express'
import { authenticate } from '../services/authorservice.js';
import { UserTypeModel } from '../Models/UserModel.js';
import bcrypt from "bcrypt";
export const commonRouter=exp.Router()
//login
commonRouter.get("/login",async(req,res)=>{
    //get user creditiantial object
        let userCred=req.body
        //call authenticate services
        let{token,user}=await authenticate(userCred)
        //save token as httpOnly cookie
        res.cookie("token",token,{
            httpOnly:true,
            sameSite:"lax",
            secure:false
        });
        //send res 
        res.status(200).json({message:"login success",payload:user})
})


//logout for user,author and admin
commonRouter.get('/logout',(req,res)=>{
    // clear the cookie named 'token'
    res.clearCookie('token',{
        httpOnly:true,  //must match original settings
        secure:false,   //must match original settings
        sameSite:'lax'  //must match original settings
    })
    res.status(200).json({message:"Logged out successfully"})
})


//update password
commonRouter.put('/change-password',async(req,res)=>{
    
    //get current password and new password
    let {email,currentPassword,newPassword}=req.body
    //check email and currentPassword
    const user=await UserTypeModel.findOne({email})
    if (!user){
        const err=new Error("Invalid email")
        err.status=401
        throw err
    }
    console.log(email, currentPassword, newPassword);
    //compare password
    if (!currentPassword || !newPassword || currentPassword === newPassword) {
        const err = new Error("Give a valid Password");
        err.status = 401;
        throw err;
    }
    const isMatch=await bcrypt.compare(currentPassword,user.password)
    if(!isMatch ){
        const err=new Error("Invalid password")
        err.status=401
        throw err
    }
    
    
    let updatedPassword=await bcrypt.hash(newPassword,10)
    //replace current password with new password
    let updateUser=await UserTypeModel.findOneAndUpdate({_id: user._id},{$set:{password:updatedPassword}},{new:true})
    //send res
    res.status(200).json({message:"Password Changed Successfully",Payload:updateUser})
})