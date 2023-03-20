import newsLetter from "../model/newsLetter.js";

class  newsLetterController{
    // functions to get all newsLetters
    static async getnewsLetters(req, res){
        try {
            const newsLetters= await newsLetter.find()
            res.status(200).json({
                data:newsLetters
            })
        } catch (error) {
            
            res.status(500).json({
                newsLetter:"server error"
            })
            
        }
    }

    // get one newsLetter
    static async getnewsLetter(req, res){
        const {id}= req.params;
        // const newsLetterId=Number(id);
        const newsLetter =await newsLetter.findOne({_id:id});

        if(!newsLetter){
            return res.status(404).json({
                newsLetter:`News Letter with id: ${id} was not found`
            });
        }else{
            return res.status(200).json({                
            data:newsLetter
            });
        }
    }
    // create a newsLetter
static async createnewsLetter(req, res){
    try {
        const {email}= req.body;

        const newnewsLetter= await newsLetter.create({email}); 
        res.status(201).json({
            ok:true,
            message:"Your newsLetter subscription has been sent!",
            data:newnewsLetter
        })
    } catch (error) {
       
            res.status(500).json({
                newsLetter:"server error"
            });
        
    }

}

}

export default newsLetterController

