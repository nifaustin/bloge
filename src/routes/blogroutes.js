import express from "express";
import { createBlog, deleteInfo, getAll, getone, updateInfo } from "../controller/blogcontroller";
import fileUpload from"../helper/multer";
import Authorization from "../middleware/authentication";
import { makeComment } from "../controller/commentContlollers";
const blogRoutes = express.Router();

blogRoutes.post("/create",Authorization, fileUpload.single("blogImage"),createBlog);
blogRoutes.get("/read",getAll);
blogRoutes.get("/read/:id",getone);
blogRoutes.delete("/delete/:id",Authorization, deleteInfo);
blogRoutes.put("/update/:id",Authorization, fileUpload.single("blogImage"),updateInfo);
blogRoutes.post("/comment/:id",Authorization,fileUpload.single("files"),makeComment);

export default blogRoutes;
