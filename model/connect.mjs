import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.database).then(
    succes => console.log("berhasil connect database "),
    error => console.log(`gagal connect ke datbase karena ${error}`)
)