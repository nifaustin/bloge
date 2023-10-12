import express from "express";
import { createInfo, getAll,deleteInfo, getone, updateInfo } from "../controller/ststusController";
const statusRoutes = express.Router();
statusRoutes.post("/create",createInfo);
statusRoutes.get("/read",getAll);
statusRoutes.get("/read/:id",getone);
statusRoutes.delete("/delete/:id",deleteInfo);
statusRoutes.patch("/update/:id",updateInfo);
statusRoutes.put("/update/:id",updateInfo);


export default statusRoutes;