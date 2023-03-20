import mongoose from "mongoose";

const commentSchema =new mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    comment:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now

    }     
});

const Comment = mongoose.model("Comment", commentSchema)

export default Comment