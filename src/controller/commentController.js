import commentModel from "../modules/commentModules";
import blogmodel from "../modules/blogModels";
import usertable from "../modules/usermodel";


export const addComment = async (req,res) =>{
  try {
    const {blogId} = req.params;
    const user = req.usertable._id;
    const {message} = req.body;
    const checkpost = await blogmodel.findById(blogId);
    if(!checkpost){
      return res.status(404).json({
        status: "404",
        message: "Post not found",
      });
    }
    const makeComent = await commentModel.create({
      blogId,
      author: user,
      message,
    });
    const updatePost = await blogmodel.findByIdAndUpdate(blogId, 
      {$push: { Comments: makeComent._id}},
      {new: true}

    );
    return res.status(201).json({
      status: "201",
      message: "Your comment added",
      data: makeComent,
    })
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to add comment",
      error: error.message,
    });
    
  }
}

export const viewAllComments = async (req,res) =>{
 try {
   const getComment = await commentModel.find();
   return res.status(201).json({
    status: "201",
    message: "Comments retrieved successfully",
    data: getComment,
   })
 } catch (error) {
  return res.status(500).json({
    status: "500",
    message: "Failed to retrieve comments",
    error: error.message,
  });
  
 }
}

// Retrieve all comments for a specific blog
export const getBlogComments = async (req, res) => {
    try {
      const { blogId } = req.params;
      const comments = await commentModel.find({ blog:blogId  });
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
  