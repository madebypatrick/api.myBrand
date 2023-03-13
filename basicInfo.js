// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express"
// import app from "./app.js";

// const options = {
//     definition: {
//       openapi: '3.0.0',
//       info: {
//         title: 'My Brand API',
//         description: ' Documentation of my Brands API',
//         version: '0.1.0',

//       },
//       contact: {
//         name: "Patrick", 
//         email: "mugwanezapatrick6@gmail.com", 
//         url: "https://patrickblog.netlify.app/", 
//       },



//       servers:[
//         {
//          api:'http://localhost:3000/'   
//         },
      
//       ]
//   },
//   apis:['./routes/allRoutes.js']
//     } 


//     const swaggerSpec = swaggerJSDoc(options);



//     function swaggerDocs(app, port){

//         app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//         app.get('/docs.json', (req, res)=>{
//          res.setHeader('Content-type', 'application/json')
//          res.send(swaggerSpec)
//         })
//     }

//     export default swaggerDocs 