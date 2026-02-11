import exp from 'express'
import { authenticate, register } from '../services/authorservice.js'
import { ArticleModel } from '../Models/ArticleModel.js';
import { verifyToken } from '../middlewares/verifyToken.js';
export const userRoute=exp.Router()

//Register user
userRoute.post('/users',async(req,res)=>{
    //get user obj from req
    let userObj=req.body;
    //call register
    const newUserObj=await register({...userObj,role:"USER"})
    //send res
    res.status(201).json({message:"User created",payload:newUserObj})
});


//Read all articles
userRoute.get('/articles',verifyToken,async(req,res)=>{
  
    //read all articles 
    let articles=await ArticleModel.find({isArticleActive:true}).populate("author","firstName email")
    //send res
    res.status(200).json({message:"articles",payload:articles})
})


//add comment to an article (protected)
userRoute.put('/articles',verifyToken,async(req,res)=>{
    //get modified article from req
    let {articleId,comment}=req.body
    //find article  
    let articleOfDB=await ArticleModel.findOne({_id:articleId})
    if(!articleOfDB){
        return res.status(404).json({message:"Article not found"})
    }
    //update the article
    let updatedArticle=await ArticleModel.findByIdAndUpdate(articleId,
        {$push:{comments:{
          user: req.user.userId,   // from verifyToken
          comment: comment
        }}},
        {new:true})
    //send res
    res.status(200).json({message:"Modified article",payload:updatedArticle})
})