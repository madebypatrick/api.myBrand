// import cloudinary from "cloudinary"
// import dotenv from "dotenv"

// dotenv.config()
// cloudinary.config({
//     cloud_name:process.env.CLOUD_NAME,
//     api_key:process.env.CLOUDINARY_API_KEY,
//     api_secret:process.env.CLOUDINARY_API_SECRET
// })

// const uploads=(file,folder)=>{
//     return new Promise((resolve)=>{
//         cloudinary.uploader.upload(file,(results)=>{
//             resolve({
//                 url:results.url,
//                 id:results.public_id
//             });
//         },{
//             resource_type:"auto",
//             folder:folder
//         });
//     });
// };

// export  {uploads} ;
// export default cloudinary;
