import blogmodel from "../modules/blogModels";
import { uploadToCloud } from "../helper/cloud";

// create blog
export const createBlog = async (req, res) => {
  try {
    const {blogImage,title,authorP,content}= req.body
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const blog = await blogmodel.create({
    blogImage:
    result?.secure_url ||
        "https://res.cloudinary.com/dwj5mbaiz/image/upload/v1696595497/samples/woman-on-a-football-field.jpg",
     title,
     authorP,
    author:req.usertable.Lname,
    authorP:req.usertable.Profile,
    content,
   
    });
    return res.status(200).json({
      status:"200",
      message: "Your Blog uploaded Well",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
        status:"500",  
      message: "Failed to upload blog",
      error: error.message,
    });
  }
};

// get alldata
export const getAll = async (req,res)=>{
    try {
        const getall = await  blogmodel.find().populate({path: "Comments",populate: {path: "author",select: "Fname Profile"}});
        return res.status(200).json({
            status:"200",
            message:"congulaturations your data retrieved well",
            data:getall,
        });
    } catch (error) {
        return res.status(500).json({
            statusbar:"500",
            message:"failed to retrieve data",
            error:error.message,
        });
        
    }
};

// get one
export const getone = async (req,res)=>{
    try {
        const {id}=req.params
        const getall = await blogmodel.findById(id).populate({path: "Comments",populate: {path: "author",select: "Fname Profile"}});
       
        if(!getall){
            return res.status(404).json({
                status: "404",
                message: " the id is not faund",
            })
        }
    const createViews = await blogmodel.findOneAndUpdate({_id: id},{$inc:{ views: 1 }},{new:true});
        return res.status(200).json({
          status: "200",
          message: "conglutration your data retrieved well by id",
          data: {
    ...getall._doc, 
    views: getall.views,
        }});
    } catch (error) {
        return res.status(500).json({
            statusbar:"500",
            message:"failed to get  data by id",
            error:error.message,
        });
        
    }
};
//DELETE

export const deleteInfo = async (req,res) =>{
    try{
        const {id} = req.params;
        const getId = await  blogmodel.findById(id);
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
            message:"you failed to delete post",
            error:error.message,

        })
    }
}

// update

export const updateInfo = async (req,res)=>{
    try {
        const {blogImage,title,content,}= req.body
    const {id}=req.params;

    const getId = await  blogmodel.findById(id);
    if(!getId){
        return res.status(404).json({
            status: "404",
            message: "Id not Found",
        })
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
   await blogmodel.findByIdAndUpdate(id,{
    blogImage:
    result?.secure_url ||
        "https://res.cloudinary.com/dwj5mbaiz/image/upload/v1696595497/samples/woman-on-a-football-field.jpg",
    title,
    content,
    author:req.usertable.Lname,
    authorP:req.usertable.Profile,
  
    })

    return res.status(201).json({
        statusbar: "201",
        message: "data updated well",
     })
        
    } catch (error) {
        return res.status(500).json({
            statusbar: "500",
            message: "YOU can't Update This Information",
            error: error.meassage
        });
    }
};


