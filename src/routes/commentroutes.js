import express from "express";
import {createComment, getBlogComments } from "../controller/commentController";
import fileUpload from"../helper/multer";
import Authorization from "../middleware/authentication";

const commentRoutes = express.Router();

commentRoutes.post("/create/:blogId/comment",Authorization, fileUpload.single("blogImage"),createComment);
commentRoutes.get("/blog/:blogId/comment",Authorization,getBlogComments);
export default commentRoutes;
