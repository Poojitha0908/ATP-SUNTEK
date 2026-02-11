import { Schema,model } from "mongoose";


//create user comment schema
const userCommentSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    comment:{
        type:String
    },
})


//create article schema
const articleSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    title:{
        type:String,
        required:[true,"title is reqiured"]
    },
    category:{
        type:String,
        required:[true,"title is reqiured"]
    },
    content:{
        type:String,
        required:[true,"title is reqiured"],
    },
    comments:[userCommentSchema],
    isArticleActive:{
        type:Boolean,
        default:true,
    },
},
{
    timeStamps:true,
    strict:"throws",
    versionKey:false
});

//
export const ArticleModel=model("article",articleSchema)