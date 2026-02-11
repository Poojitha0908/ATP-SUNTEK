import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserTypeModel } from "../Models/UserModel.js";
import { config } from "dotenv";
config()

//register function
export const register = async(userObj) =>{
    //createdocument
    const userDoc = new UserTypeModel(userObj);
    //validate for empty password
    await userDoc.validate();
    //hash and replace plain password
   userDoc.password = await bcrypt.hash(userDoc.password, 10);
    //save
    const created = await userDoc.save();
    //convert document to object to remove password
    const newUserObj = created.toObject();
    //remove password
    delete newUserObj.password;
    //return user object with out password
    return newUserObj;
}

//authenticate function
export const authenticate = async ({ email,password,role}) =>{
    //check user with email and role
    const user = await UserTypeModel.findOne({email,role});
    if(!user){
        const err=new Error("Invalid email or role");
        err.status = 401;
        throw err;
    }


    //compare password
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        const err = new Error("Invalid password");
        err.status = 401;
        throw err;
    }
    //check is an active state
    if(user.isActive==false){
        const err=new Error("Your account blocked.plz contact Admin");
        err.status=403;
        throw err;
    } 

    //generate token
    const token =jwt.sign({userId:user._id,
        role:user.role,email:user.email},
        process.env.JWT_SECRET,{
            expiresIn:"1h",
    });
    const newUserObj = user.toObject();
    delete newUserObj.password;
    return {token,user:newUserObj}
}