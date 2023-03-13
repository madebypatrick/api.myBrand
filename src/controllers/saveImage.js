import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
class saveimage {

    static async save(req, res) {
        dotenv.config();
        cloudinary.config({
            cloud_name: 'ddbcekah4',
            api_key: '454378738612683',
            api_secret: '6cnT-kFv_EBtFWjmzwbC_1VI_i8'
          });
        cloudinary.uploader.upload(req.file.path, (result, err) => {
            if (result) {
                return res.status(200).json({
                    image: result.url
                })
            }
            res.status(500).json({
                error: err
            });
        });
    }
}

export default saveimage