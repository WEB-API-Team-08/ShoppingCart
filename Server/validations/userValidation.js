//VALIDATION
const Joi = require("joi");

//Change Password Request validation
const userValidation = (data) => {
    const schema = Joi.object({
        
        name: Joi.string().min(2).max(100)
            .required(),
        sub: Joi.string().min(2).max(200)
            .required()
    });

    return schema.validate(data);
};

module.exports.userValidation = userValidation;