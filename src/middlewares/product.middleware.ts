import { Request, Response, NextFunction } from "express";
import { product } from "../schemas/schemas.js";
import { deleteProduct, filterProductsById, filterProductsByName } from "../services/postService.js";

function checkProduct(req: Request, res: Response, next: NextFunction) {

    const { name, price, description } = req.body;

    const productObj = {
        name,
        price,
        description
    }

    const validation = product.validate(productObj);
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}

async function verifyFilterProduct(req: Request, res: Response, next: NextFunction) {

    const { name } = req.query;

    if(name){
        const checkName = await filterProductsByName(name);

        if(checkName.length === 0){
            return res.status(400).send({message: "Não foi encontrado produto com esse nome!"});
        }
    }

    next();

}

function checkUpdate(req: Request, res: Response, next: NextFunction){

    const { price } = req.query;

    if(!price){
        return res.status(400).send({message: "Insira algum valor!"})
    }

    next()
}

async function checkDel(req: Request, res: Response, next: NextFunction){

    const checkExist = await filterProductsById(Number(req.query.id));

    if(checkExist === null ){
        return res.status(400).send({message: "Não existe nenhum produto com esse ID"})
    }

    next()

}

export { checkProduct, verifyFilterProduct, checkUpdate, checkDel };