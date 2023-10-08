import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email is already in use"],
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be greater than 6 characters"],
    }
},
{timestamps: true})

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;