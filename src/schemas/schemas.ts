import Joi from "joi";

export const product = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(1).required(),
    description: Joi.string().min(2).required()
})

export const client = Joi.object({
    name: Joi.string().min(3).required(),
    address: Joi.string().min(3).required()
})

export const order = Joi.object({
    clientId: Joi.number().required(),
    productsId:Joi.number().required(),
    quantity: Joi.number().min(1).required(),
    totalPrice: Joi.number().min(1).required()
})

