import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema =new mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true,
        minLength:6

    },
    createdAt:{
        type:Date,
        default:Date.now

    }     
});

// define compare password function "helps us to compare encrypted password and plaintext password"

userSchema.methods.comparePassword = async function (password){
    const match = await bcrypt.compare(password, this.password);
    return match
}
const User = mongoose.model("user", userSchema)

export default User