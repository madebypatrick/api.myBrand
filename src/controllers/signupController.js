import bcrypt from 'bcrypt';
import User from "../model/user.js"

const signupController= async (req,res)=>{
    const {fullname, email,password}=req.body;
    try {
        // hash password

        const hashedPassword =await bcrypt.hash(password, 10)

        // create new user
        const newUser =await User.create({fullname, email, password:hashedPassword})
        res.status(201).json({
            message:"New user created successfully",
            data:newUser
        })
    } catch (error) {
        res.status(500).json({
            message:"server error"
        });
        
    }

}

export default signupController