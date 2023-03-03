import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import allRoutes from "./routes/allRoutes.js"
// import multer from "multer"

mongoose.set('strictQuery',false);

// configure dotenv

dotenv.config()

// create an app instance 

const app =express()


// use app instance

app.use(cors());
app.use(bodyParser.json())

// Image storage
// const Storage =multer.diskStorage({
//     destination:'uploads',
//     filename:(req, file, cb)=>{
//         cb(null,file.originalname);
//     },
// });

// const upload=multer({
//     storage:Storage
// }).single('testImage')

// route -homeroute
app.get("/", (req, res)=>{
    res.status(200).send( `<h1 style="text-align: center; color: green; margin-top: 20vh">Welcome to my Brand</h1>`)

})



// morgan for logs

if(process.env.NOSE_ENV ==="development") app.use(morgan());

app.use("/api/v1", allRoutes)

// define port and host
const host =process.env.HOST;
const port =process.env.PORT;
// Database connection instance
const con =()=>mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

// connection instance
// const con = ()=> mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// listening to your server instance

const startServer =()=> app.listen(port); //()=>{
//     console.log(`Server listening at http://${host}:${port}`);  
// })
// promise to await for both con and startserver instance

Promise.all([con(),startServer()])
    .then(()=>{
        console.log(`MongoDB connected and Server listening at http://${host}:${port} `);
    })
    .catch((err)=>{
        console.log(err)
    })

// app.listen(port, () => {
//     console.log(`Server listening at http://${host}:${port}`);
//   });