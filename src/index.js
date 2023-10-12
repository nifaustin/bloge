import app from "./app";
import mongoose from "mongoose";
mongoose.set("strictQuery",false);
mongoose.connect(process.env.DbConnection)
    .then(() => {
    console.log("Db connection Successfuly");
})
.catch((err)=> console.log(err));
const PORT = process.env.PORT || 4400;

app.listen(process.env.PORT,() => {
    console.log(`server running on Port: http://localhost:${PORT}`);
});