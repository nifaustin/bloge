import mongoose from "mongoose";
const blogSchema =  new mongoose.Schema({
blogImage:{
  type:String , 
  require: true,
},
Pholder:{
    type:String,
    required: true,

},
description:{
    type:String,
    required: true,
},
author:{
    type:String,
    required: false,
},
authorP:{
    type:String,
    required: false,
},



});

const blogmodel = mongoose.model("blogs",blogSchema);
export default blogmodel