import dotenv from 'dotenv';
import components from './components.js';
import blogs from './blog/blogFx.js';

import express from "express";
import cors from "cors";

const defaults = components.paths;

dotenv.config();
const app = express();
app.use(cors())


const host = 
    process.env.NODE_ENV === 'production'
        ? process.env.HOST.split('https://')[1]
        : process.env.HOST.split('http://')[1];


const paths = {
    ...blogs
     
};

const apiDoc = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'My Brand API',
        description: 'Documentation of my Brands API',
    
    contact: {
        name: "Patrick", 
        email: "mugwanezapatrick6@gmail.com", 
        url: "https://patrickblog.netlify.app/", 
      },
    },

    // host:"127.0.0.1:3000/api/v1/apiDoc",
    // basePath: '/',
    schemes: ['http', 'https'],
    
    securityDefinitions: {
        JWT: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    
    consumes: ['application/json'],
    produces: ['application/json'],
    paths,
};
export default apiDoc;



