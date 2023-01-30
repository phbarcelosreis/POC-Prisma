import { Request, Response, NextFunction } from "express";
import { client } from "../schemas/schemas.js";

function checkClient(req: Request, res: Response, next: NextFunction){

    const { name, address } = req.body;

    const clientObj = {
        name,
        address
    }

    const validation = client.validate(clientObj);
    if (validation.error) {
        const errors = validation.error.details.map((detail: { message: string; }) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}

export {checkClient}