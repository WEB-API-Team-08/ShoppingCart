//VALIDATION
const Joi = require("joi");

//Change Password Request validation
const idValidation = (data) => {
    const schema = Joi.object({
        //categories
        _id: Joi.string()
            .length(24)
            .required()
    });

    return schema.validate(data);
};

module.exports.idValidation = idValidation;