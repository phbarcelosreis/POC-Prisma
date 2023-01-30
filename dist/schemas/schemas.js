import Joi from "joi";
export var product = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(1).required(),
    description: Joi.string().min(2).required()
});
