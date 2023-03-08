import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import allRoutes from "./routes/allRoutes.js"
mongoose.set('strictQuery',false);

// configure dotenv

dotenv.config()

// create an app instance z

const app =express()


// use app instance

app.use(cors());
app.use(bodyParser.json())

// route -homeroute
app.get("/", (req, res)=>{
    res.status(200).send( `<h1 style="text-align: center; color: green; margin-top: 20vh">Welcome to my Brand</h1>`)

})




app.use("/api/v1", allRoutes)


// Database connection instance
let con="";
 con =mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    
    });

 
export default app;