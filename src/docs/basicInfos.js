import dotenv from 'dotenv';
import components from './components.js';
import blogs from './blog/blogFx.js';
import express from "express";
import cors from "cors";

const defaults = components.paths;

dotenv.config();
const app = express();
app.use(cors());

const host = 
    process.env.NODE_ENV === 'production' && process.env.HOST
        ? process.env.HOST.includes('https://') 
            ? process.env.HOST.split('https://')[1]
            : process.env.HOST.includes('http://') 
                ? process.env.HOST.split('http://')[1]
                : process.env.HOST
        : 'localhost';

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
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    paths,
};

export default apiDoc;
