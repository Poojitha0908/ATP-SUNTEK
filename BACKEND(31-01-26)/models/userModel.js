import {Schema,model} from 'mongoose'

//create user schema (username, pasword, age)
const userSchema = new Schema({
    username:{
        type: String, //schema types start with capital letters unlike js
        required : [true,"Username is required"],
        minLength : [4,"min length should be four"],
        maxLength : [20,"max length exceeded"]
    },
    password:{
        type: String,
        required : [true,"password is required"]
    },
    age:{
        type: Number,
        required:[true,"age is required"],
        min: [18,"age should be above 18"],
        max: [25, "age should be less than 25"]
    },
},{
    strict:"throw",
    timestamps : true
});

//create model w that user schema
export const UserModel = model("user",userSchema) // the name of the model (user) will be taken by mongoose and pluralise it and creates a collection in the db
