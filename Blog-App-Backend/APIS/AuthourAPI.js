import exp from 'express'
import { UserTypeModel } from '../Models/UserModel.js'
import { authenticate, register } from '../services/authorservice.js'
import { ArticleModel } from '../Models/ArticleModel.js'
import { checkAuthor } from '../middlewares/checkAuthor.js'
import { verifyToken } from '../middlewares/verifyToken.js'

export const authorRoute=exp.Router()

//register user
authorRoute.post('/users',async(req,res)=>{
    //get author obj from req
    let userObj=req.body;
    //call register
    const newUserObj=await register({...userObj,role:"AUTHOR"})
    //send response
    res.status(201).json({message:"author created",payload:newUserObj     
    });
})
//create article
authorRoute.post('/articles',verifyToken,checkAuthor,async(req,res)=>{
    //get article from req
    let article=req.body;
    //check for the author
    let author=await userTypeModel.findById(article.author)
    //create article document
    let newArticleDoc=new ArticleModel(article)
    //save
    let createdArticleDoc=await newArticleDoc.save()
    //send res
    res.status(201).json({message:"article created",payload:createdArticleDoc})
})

//Read articles of author(protected route)
authorRoute.get('/articles/:authorId',verifyToken,checkAuthor,async(req,res)=>{
    //get author id
     let aid=req.params.authorId;
    //read articles by this author which are active
    let articles=await ArticleModel.find({author:aid,isArticleActive:true}).populate("author","firstName email")
    //send res
    res.status(200).json({messafe:"articles",payload:articles})
})


//Edit article(protected route)
authorRoute.put('/articles',verifyToken,checkAuthor,async(req,res)=>{
    //get modified article from req
    let {articleId,title,category,content,author}=req.body
    //find article
    let articleOfDB=await ArticleModel.findOne({_id:articleId,author:author})
    if(!articleOfDB){
        return res.status(401).json({message:"Article not found"})
    }
    //update the article
    let updatedArticle=await ArticleModel.findByIdAndUpdate(articleId,
        {$set:{ title,category,content }},
        { new:true});
    //send res(updated article)
     res.status(200).json({message:"Article updated",payload:updatedArticle})
})



//delete(soft delete) article (protected route)
authorRoute.delete('/articles',verifyToken,checkAuthor,async(req,res)=>{
    const { articleId, author } = req.body;

    // Find article that belongs to this author
    const articleOfDB = await ArticleModel.findOne({_id: articleId,author: author});
    if (!articleOfDB) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Soft delete → mark inactive
    const deletedArticle = await ArticleModel.findByIdAndUpdate(articleId,
      { $set: { isArticleActive: false } },
      { new: true });
    //send res
    res.status(200).json({message: "Article soft deleted", payload: deletedArticle});
})