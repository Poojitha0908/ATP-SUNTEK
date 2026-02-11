import {Schema,model} from 'mongoose'

//create cart schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product', // name of the product model
    },
    quantity:{
        type: Number,
      default: 1
    }
})
//create user schema
const userSchema = new Schema({
    name:{
        type: String, //schema types start with capital letters unlike js
        required : [true,"name is required"],
    },
    email:{
        type:String,
        required : [true,"email is required"],
        unique:true //add to index
    },
    password:{
        type: String,
        required : [true,"password is required"]
    },
    cart:{
        type:[cartSchema]
    }
},{
    strict:"throw",
    timestamps : true
});

//create model w that user schema
export const UserModel = model("user",userSchema) // the name of the model (user) will be taken by mongoose and pluralise it and creates a collection in the 