import { Request, Response } from "express";
import { Client } from "../protocols/product.js";
import { addClient } from "../services/clientsService.js";

function postClient(req: Request, res: Response) {

    const { name, address } = req.body;

    const newClient: Client = {
        name, address
    }

    addClient(newClient);

    return res.sendStatus(200);

}

export { postClient };