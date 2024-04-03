const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    gender: { type: String, required: true },
    education: { type: String },
    dob: { type: Date },

});


const User = mongoose.model("User",userSchema);

module.exports = User;