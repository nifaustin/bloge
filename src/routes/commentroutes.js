import express from "express";
import {createComment, getBlogComments } from "../controller/commentController";
import fileUpload from"../helper/multer";
import Authorization from "../middleware/authentication";

const commentRoutes = express.Router();

commentRoutes.post("/create/:id",Authorization,createComment);
commentRoutes.get("/get/:id",Authorization,getBlogComments);
export default commentRoutes;
