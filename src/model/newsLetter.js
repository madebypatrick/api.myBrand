import mongoose from "mongoose";

const newsLetterSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        default:Date.now

    }     
});

const newsLetter = mongoose.model("newsLetter", newsLetterSchema)

export default newsLetter