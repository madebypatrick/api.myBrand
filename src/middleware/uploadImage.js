import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: 'ddbcekah4',
    api_key: '454378738612683',
    api_secret: '6cnT-kFv_EBtFWjmzwbC_1VI_i8'
  });


const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    req.body.image = result.secure_url;
    res.cookie('image',result.secure_url)

    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export default uploadImage