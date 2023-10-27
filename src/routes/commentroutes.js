import express from "express";
import {addComment, getBlogComments,viewAllComments } from "../controller/commentController";
import fileUpload from"../helper/multer";
import Authorization from "../middleware/authentication";

const commentRoutes = express.Router();

commentRoutes.post("/create/:blogId",Authorization,fileUpload.single("message"),addComment);
commentRoutes.get("/get/:id",Authorization,getBlogComments);
commentRoutes.get("/all/comments", viewAllComments);
export default commentRoutes;
