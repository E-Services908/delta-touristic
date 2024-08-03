const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for generating unique IDs
        required: true,
        default: mongoose.Types.ObjectId, // Use default value to generate unique ID automatically
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("users", userModel);
