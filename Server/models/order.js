const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({

    itemId: {
        type: "String",
        length:24,
        required:true
    },
    itemName: {
        type: "String",
        minlength: 2,
        maxlength: 50,
        required: true
    },
    price: {
        type: Number,
        required: true
        
    },
    quantity: {
        type: Number,
        required: true
        
    }
}
);

const orderSchema = new mongoose.Schema({

    userId: {
        type: "String",
        minlength: 2,
        maxlength: 50
    },
    cart: {
        type: [orderItemSchema],
        minlength: 1,
        maxlength: 20,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
},
{timestamps:true}
);

const order = mongoose.model("order", orderSchema);
module.exports = order;