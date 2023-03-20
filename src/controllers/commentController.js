import Comment from "../model/comment.js";

class  commentController{
    // functions to get all comments
    static async getComments(req, res){
        try {
            const comments= await Comment.find()
            res.status(200).json({
                data:comments
            })
        } catch (error) {
            
            res.status(500).json({
                message:"server error"
            })
            
        }
    }

    // get one comment
    static async getComment(req, res){
        const {id}= req.params;
        const comment =await Comment.findOne({_id:id});

        if(!comment){
            return res.status(404).json({
                message:`Comment with id: ${id} was not found`
            });
        }else{
            return res.status(200).json({                
            data:comment
            });
        }
    }
    // create a comment
static async createComment(req, res){
    try {
        const {fullname,comment}= req.body;

        const newComment= await Comment.create({fullname,comment}); 
        res.status(201).json({
            ok:true,
            message:"Your comment has been posted!",
            data:newComment
        })
    } catch (error) {
       
            res.status(500).json({
                message:"server error"
            });
        
    }

}



}

export default commentController

