const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: "String",
        minlength: 2,
        maxlength: 100,
        required: true
    },
    sub: {
        type: "String",
        minlength: 2,
        maxlength: 200,
        required: true
    }
});

const User = mongoose.model("auth", userSchema);
module.exports = User;