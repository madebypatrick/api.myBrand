import Blog from "../model/blog.js";

class  blogController{
    // functions to get all blogs
    static async getBlogs(req, res){
        try {
            const blogs= await Blog.find()
            res.status(200).json({
                data:blogs
            })
        } catch (error) {
            
            res.status(500).json({
                message:"server error"
            })
            
        }
    }

    // get one blog
    static async getBlog(req, res){
        const {id}= req.params;
        const blog =await Blog.findOne({_id:id});

        if(!blog){
            return res.status(404).json({
                message:`Blog with id: ${id} was not found`
            });
        }else{
            return res.status(200).json({                
            data:blog
            });
        }
    }
    // create a blog
static async createBlog(req, res){
    try {
        const {title,category, content, author}= req.body;
        const newBlog= await Blog.create({title,category,content,author}); 
        res.status(201).json({
            message:"New Blog Created Succesfully",
            data:newBlog
        })
    } catch (error) {
       
            res.status(500).json({
                message:"server error"
            });
        
    }

}

// update blog
static async updateBlog(req,res){
    // console.log(req.params.id)
    try {
        // const id= req.params.id  //used in ES5
        const {id}=req.params; //used in ES6

        // body to be updated
        const {title,category, content}=req.body
        // id
        const _id=id
        const blogToBeUpdate =await Blog.findByIdAndUpdate(_id, {title,category,content}, {new:true});
        

        if(!blogToBeUpdate){
            return res.status(404).json({
                message:`blog with id: ${id} was not found`
            })
        }else{
          
            return res.status(200).json({
                message:"Blog updated successfully",
                data:blogToBeUpdate

            });
        }
    } catch (error) {
        res.status(500).json({
            message:"server error"
        });
        
    }
}

// delete blog
 static  async deleteBlog(req, res){
     try {
        const {id}=req.params;
        // find the blog
        const _id = id
        const blogToBeDeleted=await Blog.findByIdAndDelete(_id)

        if(!blogToBeDeleted){
            return res.status(404).json({
                message:`blog with id: ${id} was not found`
            });
        }else{
           
            return res.status(200).json({
                message: "Blog deleted successfully",               
            })
        }
     } catch (error) {
        res.status(500).json({
            message:"server error"
        });
        
     }
 }

}

export default blogController

