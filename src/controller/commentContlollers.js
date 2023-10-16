import blogmodel from "../modules/blogModels";
import commented from "../modules/commentModules";

export const makeComment = async(req,res)=>{
    try {
        const {comments} =req.body
        const {id}=req.params

        const findBlogId = await blogmodel.findById(id);
        if(!findBlogId){
            return res.status(404).json({
                status: "404",
                message: "Blog Not Found",
            })
        }

        const newComment = await commented({
            author: req.usertable.Lname,
            authorP: req.usertable.Profile,
            comments
        })
        console.log("commented status", findBlogId);

       findBlogId.Comments.push(newComment);
       await findBlogId.save();
        return res.status(200).json({
            status: "200",
            message: "Success Added",
            data: newComment
        })
    } catch (error) {
console.log(error);
        return res.status(500).json({
            status: "500",
            message: "Failed to Add Comment"

        })
        
    }
}