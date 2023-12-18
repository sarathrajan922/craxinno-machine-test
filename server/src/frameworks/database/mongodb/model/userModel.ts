import { Schema, model } from "mongoose";

const userScheme = new Schema({
    email: {
        type: String,
        required:[true,"please provide a email address"],
        unique:true
    },
    mobile:{
        type: Number,
        required:[true,"please provide a mobile number"],
        unique:true
    },
    password:{
        type: String,
        required:[true, "please provide a password"]
    }
});

const User = model("User",userScheme,"users")
export default User
