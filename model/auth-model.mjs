import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const UserModel = new mongoose.model("user", UserSchema)

export default UserModel