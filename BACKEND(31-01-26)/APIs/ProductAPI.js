import exp from "express"
import {ProductModel} from '../models/productModel.js'
export const ProductApp=exp.Router()


//create product
ProductApp.post('/products',async(req,res)=>{
   
    let newProduct=req.body;
    //create new product doc
    let newProductDoc=new ProductModel(newProduct)
    //save in db
    await newProductDoc.save()
    //send res
    res.status(201).json({message:"product created"})
})


//read product
ProductApp.get('/products',async(req,res)=>{
    //read product from db
    let products= await ProductModel.find()
    res.status(200).json({message:"products",payload:products})
})

//GET product by id
ProductApp.get('/products/:id',async(req,res)=>{
    let proID=req.params.id;
    let product= await ProductModel.findById(proID);
    if(!product)
    {
        return res.status(404).json({message:"product not found"});
    }
    res.status(200).json({message:"products",payload:product})
})

//update product
ProductApp.put('/products/:id',async(req,res)=>{
    let proID=req.params.id;
    let updatedProduct=req.body;
    let modifiedProduct=await ProductModel.findByIdAndUpdate(proID,{$set:{...updatedProduct}},{new:true});
    //send res
    res.status(200).json({message:"product modified",payload:modifiedProduct})
})