import { userApp } from'./API/USERAPI.js'
import { productApp } from'./API/PRODUCTAPI.js'
//import express module
import exp from 'express'
//create server
const app=exp()
//Assign port number
app.listen(3000,()=>console.log('HTTP server listening on port 3000....'))

//body parsing middleware
app.use(exp.json())

app.use('/user-api',userApp)
app.use('/product-api',productApp)