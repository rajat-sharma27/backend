import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on((error)=>{
        console.log("ERROR",error)
        throw error 
    })
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is runningat post ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed!! ",err);
})
