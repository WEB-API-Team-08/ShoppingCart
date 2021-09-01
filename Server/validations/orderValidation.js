//VALIDATION
const Joi = require("joi");

//Change Password Request validation
const orderValidation = (data) => {
    const schema = Joi.object({
        cartItems: Joi.array().items({

            _id: Joi.string()
                .length(24)
                .required(),


            itemName: Joi.string()
                .min(2)
                .max(50)
                .required(),

            price: Joi.number()
                .required(),

            quantity: Joi.number()
                .required()

        })

    });

    return schema.validate(data);
};

module.exports.orderValidation = orderValidation;