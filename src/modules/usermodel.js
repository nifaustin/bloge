import mongoose from "mongoose";
const userschema =  new mongoose.Schema({
Fname:{
  type:String , 
  require: true,
},
Lname:{
    type:String,
    required: true,

},
Email:{
    type:String,
    required: true,
    unique:true,
},
Password:{
    type:String,
    required: true,
},
Profile:{
    type:String,
    required: false,
},
role:{
    type:String,
    enum:["user","admin"],
    default:"user",
},


});

const usertable = mongoose.model("user",userschema);
export default usertable;