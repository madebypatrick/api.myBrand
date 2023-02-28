import {blogs} from "../model/dummy.js";

class  blogController{
    // functions to get all blogs
    static async getBlogs(req, res){
        try {
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
        const blogId=Number(id);
        const blog = blogs.find(b => b.id === blogId)

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
        const {title, content, author}= req.body;
        const id=blogs.length +1;
        const newBlog ={id,title,content,author}
        blogs.push(newBlog)
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

        const blogId=Number(id)
        // body to be updated
        const {title, content}=req.body
        const blogToBeUpdate =blogs.find(blog => blog.id ===blogId)
        

        if(!blogToBeUpdate){
            return res.status(404).json({
                message:`blog with id: ${id} was not found`
            })
        }else{
            blogToBeUpdate.title=title;
            blogToBeUpdate.content=content
            return res.status(200).json({
                message:"Blog updated successfully",
                data:blogs

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
        const blogId=Number(id);
        // find the blog
        const index =blogs.findIndex(blog => blog.id === blogId);
        // condition
        if(index === -1){
            return res.status(404).json({
                message:`blog with id: ${id} was not found`
            });
        }else{
            blogs.splice(index, 1)
            return res.status(200).json({
                message: "Blog deleted successfully",
                data:blogs
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

