import exp from "express";
import {userApp} from './APIs/UserApi.js'
import { ProductApp } from "./APIs/ProductAPI.js";
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

//body parser middleware
app.use(exp.json())

//if path starts with /user-api , forward req to userApp
app.use('/user-api',userApp)
app.use('/product-api',ProductApp)

//custamise and convert to json with the help of middleware
//error handlinng middleware (at the end of entry point (server.js file))
function errorHandler(err,req,res,next){
    res.json({message:"error", reason:err.message})
}
app.use(errorHandler)

//way 2
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error", reason: err.reason})
})