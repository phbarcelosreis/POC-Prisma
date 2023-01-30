import { Request, Response, NextFunction } from "express";
import { order } from "../schemas/schemas.js";
import { checkClient, checkProduct } from "../services/ordersService.js";


async function checkOrder(req: Request, res: Response, next: NextFunction){

    const { clientId, productsId, quantity, totalPrice } = req.body;

    const orderObj = {
        clientId,
        productsId,
        quantity,
        totalPrice
    }

    const validation = order.validate(orderObj);
    if (validation.error) {
        const errors = validation.error.details.map((detail: { message: string; }) => detail.message);
        return res.status(422).send(errors);
    }

    const clientCheck = await checkClient(clientId);
    console.log(clientCheck)

    if(clientCheck === null){
        return res.status(400).send({message: "Não existe nenhum cliente com esse ID"})
    }

    const productCheck = await checkProduct(productsId);
    console.log(productCheck)

    if(productCheck === null){
        return res.status(400).send({message: "Não existe nenhum produto com esse ID"})
    }

    next();

}

export {checkOrder}
