import mongoose from "mongoose";

const messageSchema =new mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    from:{
        type:String,
        required:true

    },
    message:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        default:Date.now

    }     
});

const Message = mongoose.model("Message", messageSchema)

export default Message