
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
// importing routes

import statusRoutes from "./routes/ststusRoutes"
import blogRoutes from "./routes/blogroutes";
import usersroot from "./routes/userRoutes";


// configuration

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.use("/api/klab/info",statusRoutes);
app.use("/api/klab/blog",blogRoutes);
app.use("/api/klab/user",usersroot);
//

app.get("/",(req,res) =>{
res.status(200).json({
    status:"succes",
    author:"niyo",
    message:"welcome to my api",
});
});

export default app