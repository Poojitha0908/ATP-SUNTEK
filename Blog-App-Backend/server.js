import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { adminRoute } from './APIS/AdminAPI.js'
import { userRoute } from './APIS/UserAPI.js'
import { authorRoute } from './APIS/AuthourAPI.js'
import cookieParser from 'cookie-parser'
import { commonRouter } from './APIS/common-Api.js'
config() //process.env

const app=exp()
//add body parser middleware
app.use(exp.json())// to parse the body of req
app.use(cookieParser())
//connect Apis
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use("/admin-api",adminRoute)
app.use("/common-api",commonRouter)


//connect to db
const connectDB=async()=>{
    try{
    await connect(process.env.DB_URL)
    console.log("DB connection succes")
    //start http server
    app.listen(process.env.PORT,()=>console.log("server started"))
    }catch(err){
        console.log("Err in DB connection",err)
    }
}
connectDB()
//dealing with invalid path
// app.use((req,res,next)=>{
//     res.json({message:"Invalid path"});
// });
// error handiling middleware
app.use((err,req,res,next)=>{
    console.log("err:",err)
    res.json({message:"error",reason:err.message})
})

