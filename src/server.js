import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";




mongoose.set('strictQuery',false);

// configure dotenv

dotenv.config()

// define port and host
const host =process.env.HOST;
const port =process.env.PORT;


// listening to your server instance

const startServer =()=> app.listen(port); //()=>{

Promise.all([startServer()])
    .then(()=>{
        console.log(`MongoDB connected and Server listening at http://${host}:${port} `);
    })
    .catch((err)=>{
        console.log(err)
    })

