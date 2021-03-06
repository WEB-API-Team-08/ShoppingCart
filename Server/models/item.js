const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: {
        type: "String",
        minlength: 2,
        maxlength: 50,
        required: true
    },
    likeCount: {
        type: Number,
        default: 0
    },
    imgUrl: {
        type: String,
        minlength: 10,
        maxlength: 700,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Item = mongoose.model("Items", itemSchema);
module.exports = Item;