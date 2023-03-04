import Message from "../model/message.js";

class  messageController{
    // functions to get all messages
    static async getMessages(req, res){
        try {
            const messages= await Message.find()
            res.status(200).json({
                data:messages
            })
        } catch (error) {
            
            res.status(500).json({
                message:"server error"
            })
            
        }
    }

    // get one message
    static async getMessage(req, res){
        const {id}= req.params;
        // const messageId=Number(id);
        const message =await Message.findOne({_id:id});

        if(!message){
            return res.status(404).json({
                message:`Message with id: ${id} was not found`
            });
        }else{
            return res.status(200).json({                
            data:message
            });
        }
    }
    // create a message
static async createMessage(req, res){
    try {
        const {fullname,email, from, message}= req.body;

        const newMessage= await Message.create({fullname,email,from,message}); 
        res.status(201).json({
            message:"New Message Created Succesfully",
            data:newMessage
        })
    } catch (error) {
       
            res.status(500).json({
                message:"server error"
            });
        
    }

}

// update message
static async updateMessage(req,res){
    // console.log(req.params.id)
    try {
        const {id}=req.params; //used in ES6

        // body to be updated
        const {fullname,email, from, message}=req.body
        // id
        const _id=id
        const messageToBeUpdate =await Message.findByIdAndUpdate(_id, {fullname,email, from, message}, {new:true});
        

        if(!messageToBeUpdate){
            return res.status(404).json({
                message:`message with id: ${id} was not found`
            })
        }else{
          
            return res.status(200).json({
                message:"Message updated successfully",
                data:messageToBeUpdate

            });
        }
    } catch (error) {
        res.status(500).json({
            message:"server error"
        });
        
    }
}

// delete message
 static  async deleteMessage(req, res){
     try {
        const {id}=req.params;
        // find the message
        const _id = id
        const messageToBeDeleted=await Message.findByIdAndDelete(_id)

        if(!messageToBeDeleted){
            return res.status(404).json({
                message:`message with id: ${id} was not found`
            });
        }else{
           
            return res.status(200).json({
                message: "Message deleted successfully",               
            })
        }
     } catch (error) {
        res.status(500).json({
            message:"server error"
        });
        
     }
 }

}

export default messageController

