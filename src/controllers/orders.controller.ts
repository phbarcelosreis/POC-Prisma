import { Request, Response } from "express";
import { Order } from "../protocols/product.js";
import { addOrder } from "../services/ordersService.js";

function postOrder(req: Request, res: Response) {

    const { clientId, productsId, quantity, totalPrice } = req.body;

    const newOrder: Order = {
        clientId,
        productsId,
        quantity,
        totalPrice
    }

    addOrder(newOrder);

    return res.sendStatus(200);

}

export { postOrder };