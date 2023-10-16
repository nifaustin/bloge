import blogmodel from "../modules/blogModels";
import { uploadToCloud } from "../helper/cloud";

// create blog
export const createBlog = async (req, res) => {
  try {
    const {blogImage,Pholder,description}= req.body
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const blog = await blogmodel.create({
    blogImage:
    result?.secure_url ||
        "https://res.cloudinary.com/dwj5mbaiz/image/upload/v1696595497/samples/woman-on-a-football-field.jpg",
    Pholder,
    description,
    author:req.usertable.Lname,
    authorP:req.usertable.Profile,
   
    });
    return res.status(200).json({
      message: "Your Blog uploaded Well",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// get alldata
export const getAll = async (reg,res)=>{
    try {
        const getall = await  blogmodel.find();
        return res.status(200).json({
            status:"success",
            message:"conglutration",
            data:getall,
        });
    } catch (error) {
        return res.status(500).json({
            statusbar:"failed",
            message:"yeee",
            error:error.message,
        });
        
    }
};

// get one
export const getone = async (req,res)=>{
    try {
        const{ id }= req.params
        const getall = await  blogmodel.findById(id);
        if(!getone){
            return res.status(404).json({
                message:"id not found",
            });
        }
        return res.status(200).json({
            statusbar:"success",
            message:"conglutration",
            data:getall,
        });
    } catch(error){
        return res.status(500).json({
            statusbar:"failed",
            message:"yeee",
            error:error.message,
        });
        
    }
};
//DELETE

export const deleteInfo = async (req,res) =>{
    try{
        const {id} = req.params;
        const getId = await  blogmodel.findById(id)
        if(!getId)
        return res.status(404).json({
            message: "id not found"
        });

        const delId = await  blogmodel.findByIdAndDelete(id);

        return res.status(200).json({
            statusbar:"Success",
            message:"information Deleted",
            data: delId,
        });
    }catch(error){
        return res.status(500).json({
            statusbar:"failed",
            message:"byanze",
            error:error.message,

        })
    }
}

// update

export const updateInfo = async (req,res)=>{
    try {
        const {blogImage,Pholder,description,author,authorP}= req.body
    const {id}=req.params;

    const getId = await  blogmodel.findById(id);
    if(!getId){
        return res.status(404).json({
            message: "Id not Found",
        })
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
   await blogmodel.findByIdAndUpdate(id,{
    blogImage:
    result?.secure_url ||
        "https://res.cloudinary.com/dwj5mbaiz/image/upload/v1696595497/samples/woman-on-a-football-field.jpg",
    Pholder,
    description,
  
    })

    return res.status(201).json({
        statusbar: "Success",
        message: "Congz You Did Greate Job",
     })
        
    } catch (error) {
        return res.status(500).json({
            statusbar: "Failed",
            message: "YOU cant Update This Information",
            error: error.meassage
        });
    }
};


// creating comments

// export const usercomment = async (req, res) =>{
//     try {
//         const {id} = req.params;
//         const {add_comments} = req.body;
//         // console.log(req.body)
//         const blog = await blogmodel.findById(id);
//         if(!blog){
//             return res.status(404).json({ status: "404",messsage: "blog not there"});
//         }
//         const comment = {
//             add_comments,
//             Author: req.usertable.Lname,
//             Author_Profile: req.usertable.Profile,

//         }; 
//         console.log(comment)
//         blog.Comments.push(comment);
//         await blog.save();
//         return res.status(200).json({ status: "200",message:"succeful commented"});
//     } catch (error) {
//         return res.status(500).json({status:"500",
//     message:"failed to comment",
// error: error.message});
//     }
// }