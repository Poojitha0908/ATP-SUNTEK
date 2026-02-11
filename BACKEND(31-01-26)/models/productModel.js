import { Schema,model } from "mongoose";

//create product schema (name, brand, price)
const productSchema = new Schema({
    productId:{
        type:Number,
        required:[true,"product id is required"]
    },
    productName:{
        type:String,
        required:[true,"product name is required"],
        minLength:[4,"min length should be 4"],
        maxLength:[10,"max length exceeded"]
    },
    productPrice:{
        type:Number,
        required:[true,"price is required"]
    }
},{
    strict:"throw",
    timestamps:true
});
export const ProductModel=model("product",productSchema)