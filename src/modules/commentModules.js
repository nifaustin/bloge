import mongoose from "mongoose";
const commentSchema =  new mongoose.Schema({
author:{
    type:String,
    required: false,
},
authorP:{
    type:String,
    required: false,
},

comments:{
    type:String,
    required: false,
}

});

const commented = mongoose.model("comment",commentSchema);
export default commented