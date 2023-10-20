import mongoose from "mongoose";
const commentSchema =  new mongoose.Schema({
content:{
  type:String , 
  require: true,
},


author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required: false,
    
},
blog:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"blogs",
    required: false,
},


},{timestamps:true});

const commentModel = mongoose.model("comment",commentSchema);
export default commentModel;