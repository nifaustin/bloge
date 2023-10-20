import mongoose from "mongoose";
const statusSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required: true,

    },
    Age:{
        type:Number,
        required:true
    },
});

const statusInfo = mongoose.model("inomation",statusSchema);
export default statusInfo;