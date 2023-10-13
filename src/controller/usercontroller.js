import usertable from "../modules/usermodel";
import { uploadToCloud } from "../helper/cloud";
import  Jwt from "jsonwebtoken";
import bcrypt, {genSalt,hash} from "bcrypt";

export const userreg = async (req,res)=>{
    try {

        const {Fname,Lname,Email,Password,Profile} = req.body;
        const checkemail=await usertable.findOne({
            Email: req.body.Email,
           
        })
        if(checkemail){
            return res.status(500).json({
                status:"500",
                message:"email exixts",

            })

        }
        let userImage;
        if(req.file) userImage = await uploadToCloud(req.file,res);
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(Password,salt);
        const createnewuser = await usertable.create({
            Fname,
            Lname,
            Email,
            Password:hashedPass,
            Profile:userImage?.secure_url || "profile.jpg",
        })
        return res.status(200).json({
            status:"200",
            message:"registered",
            data:createnewuser,
        })

    } catch (error) {
        return res.status(500).json({
            status: "500",
            message:"failed",
            error:error.message,
        
        })
    }
}
// get alldata
export const getAll = async (reg,res)=>{
    try {
        const getall = await  usertable.find();
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
// getone

export const getone = async (req,res)=>{
    try {
        const{ id }= req.params
        const getuser = await usertable.findById(id);
        if(!getuser){
            return res.status(404).json({
                message:"id not found",
            });
        }
        return res.status(200).json({
            statusbar:"success",
            message:"conglutration",
            data:getuser,
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

export const deleteuser = async (req,res) =>{
    try{
        const {id} = req.params;
        const getId = await usertable.findById(id)
        if(!getId)
        return res.status(404).json({
            message: "id not found"
        });

        const delId = await usertable.findByIdAndDelete(id);

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
export const updateuser = async (req,res)=>{
    try {
      const {id} = req.params;
        const {Fname,Lname,Email,Password,Profile} = req.body;
        const checkemail=await usertable.findOne({
            Email: req.body.Email,
           
        })
        if(checkemail){
            return res.status(500).json({
                status:"500",
                message:"email exixts",

            })

        }
        let userImage;
        if(req.file) userImage = await uploadToCloud(req.file,res);
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(Password,salt);
        const updateuser = await usertable.findByIdAndUpdate(id,{
            Fname,
            Lname,
            Email,
            Password:hashedPass,
            Profile:userImage?.secure_url || "profile.jpg",
        })
        return res.status(200).json({
            status:"200",
            message:"updated",
         
        })

    } catch (error) {
        return res.status(500).json({
            status: "500",
            message:"failed",
            error:error.message,
        
        })
    }
}

//login
export const userLoginFunction = async (req, res) => {
    try {
      const userLogin =await usertable.findOne({
        Email: req.body.Email,
      });
      if(!userLogin){
        return res.status(404).json({
          status: "404",
          message: "User Not Found",
        });
      }
      const isMatch = await bcrypt.compare(req.body.Password, userLogin.Password);
      if(!isMatch){
        return res.status(404).json({
          status: "404",
          message: "Password Incorrect",
        });
      }
      const token = await Jwt.sign(
        { id: userLogin._id},
        process.env.JWT_SECRET,
        { expiresIn: process.env.EXPIREDTIME}
      );
      return res.status(200).json({
        status: "200",
        message: "User Login Succees",
        users: userLogin,
        token: token,
      })
    } catch (error) {
      return res.status(500).json({
        status: "500",
        message: "Login Failed",
        error: error.message,
      });
    }
  }



