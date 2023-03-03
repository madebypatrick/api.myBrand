import jwt from "jsonwebtoken"
const restrictDelete=(req,res,next)=>{
    // check if the request object has an authorization header

    const authHeader = req.headers.authorization;
    // console.log(authHeader)
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ZlOGQyY2VmMTcxM2E3NzYyZDk2NTQiLCJpYXQiOjE2Nzc2NjU5ODh9.EpJOIa0QReW1v3QYQjjObs_LVFIbwrm5XYjlC_9TjBM
    
    
    // get token from authHeader
    const token=authHeader.split(" ")[1]
    // console.log (token)


    // conditions
    if(!authHeader){
        return res.status(401).json({
            message:"No token provided"
        })
    }else{
        // extract unique data in our token so that we can use it to verify that user
        const verifyToken = jwt.verify(token, process.env.SECRETE_KEY)
        if(!verifyToken){
            return res.status(401).json({
                message:"Invalid Token"
            })
        }else{
            
            const {userId} =verifyToken;
            // condition
            const {userBodyId}=req.body;
            if (userBodyId !==userId){
                return res.status(403).json({
                    message:"Access denied"
                })
            }else{
                next();
            }

        }
    }
};

export default restrictDelete