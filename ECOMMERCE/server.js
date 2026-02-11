import exp from "express";
import {userRoute} from "./APIs/UserApi.js"
import {ProductApp} from "./APIs/productApi.js"
import {connect} from 'mongoose'
//create server
const app=exp()
const port=4000;
//connect to db server
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/anuragdb2');
        console.log("Db is connected")
        app.listen(port,()=>console.log('HTTP server listening on port 4000....'))
    }
    catch(err)
    {
        console.log("error in connectivity",err)
    }
        
}

connectDB()

//body patser middleware
app.use(exp.json())
// add cookieparser iddleware
//app.use(cookieParser())

//if path starts with /user-api , forward req to userApp
app.use('/user-api',userRoute)
app.use('/product-api',ProductApp)




//error handling middleware
//function errorHandler(err,req,res,next)
//{res.json({message:"error",reason:err.message})}app.use(errorHandler)