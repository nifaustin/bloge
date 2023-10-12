import  express from "express";
import { userreg,getAll,getone,deleteuser, updateuser,userLoginFunction} from "../controller/usercontroller";
import fileUpload from "../helper/multer";
// import { getone } from "../controller/blogcontroller";
const usersroot = express.Router();
usersroot.post("/newuser", fileUpload.single("Profile"),userreg);
usersroot.get("/read",getAll);
usersroot.get("/read/:id",getone);
usersroot.delete("/delete/:id",deleteuser);
usersroot.put("/update/:id", fileUpload.single("Profile"),updateuser);
usersroot.post("/login",fileUpload.single("profile"),userLoginFunction);

export default usersroot;