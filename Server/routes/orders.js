const { Router } = require("express");
const Order = require("../models/order");
const { orderValidation } = require("../validations/orderValidation");
const router = Router();

router.post("/", async (req, res) => {




    //Validate the data before we create an order
    const { error } = orderValidation(req.body);
    if (error) {
        console.log( error.details[0].message);
        return res.status(400).send({ message: error.details[0].message });
    }

    try {
      
        const cartItems = req.body.cartItems;
        let insertableCartItems = [];
        let total = 0;
        for (const CartItem of cartItems) {
            total = total + (CartItem.price * CartItem.quantity);

            const ci = {
                itemId: CartItem._id,
                itemName:CartItem.itemName,
                price:CartItem.price,
                quantity:CartItem.quantity

            }
            insertableCartItems.push(ci);
        }
        let order = new Order({
            cart: insertableCartItems,
            total: total,

        });

        order = await order.save();

        return res.status(200).send({ message: "Order successful."});


    }
    catch (e) {
        console.log(e);

        return res.status(500).send("Database/Server Error");
    }

  



});

module.exports = router;