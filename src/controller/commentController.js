import commentModel from "../modules/commentModules";
import blogmodel from "../modules/blogModels";
import usertable from "../modules/usermodel";
export const createComment = async (req,res) =>{
 try {
    const{ content} = req.body;
    const{ blogId } = req.params;
    const user = req.usertable;
    const comment = await commentModel.create({ content,author: user._id, blog: blogId });
    await blogmodel.findOneAndUpdate(
        {_id: blogId},
        {$addToSet:{Comments: comment._id}},
        {new: true},


        
    );
  
    return res.status(200).json({
        status:"200",
        message:"Comment created successfully",
        data:comment,
    });
 } catch (error) {
    return res.status(500).json({
        status: "500",
        message:"Failed to create comment",
        error: error.message,
    });
    
 }
};

// Retrieve all comments for a specific blog
export const getBlogComments = async (req, res) => {
    try {
      const { blogId } = req.params;
      const comments = await commentModel.find({ blog: blogId });
      return res.status(200).json({
        status: "200",
        message: "Comments retrieved successfully",
        data: comments,
      });
    } catch (error) {
      return res.status(500).json({
        status: "500",
        message: "Failed to retrieve comments",
        error: error.message,
      });
    }
  };
  