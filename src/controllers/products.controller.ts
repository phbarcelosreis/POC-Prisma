import { Request, Response } from "express";
import { checkUpdate, Product } from "../protocols/product.js";
import { addProducts, deleteProduct, filterProductsById , filterProductsByName, getAllProducts, updateQuery } from "../services/postService.js";

function postProduct(req: Request, res: Response) {

    const { name, price, description } = req.body;

    const newProduct: Product = {
        name, price, description
    }

    addProducts(newProduct);

    return res.sendStatus(200);

}

async function filterProduct(req: Request, res: Response) {

    const { name } = req.query;

    if(!name){

        const all = await getAllProducts();

        return res.send(all);
    }

    const newNames = await filterProductsByName(name);

    return res.send(newNames);
}

function updateProducts(req: Request, res: Response){

    const { id } = req.params;
    const { price } = req.query;

    const newObj: checkUpdate = {
        id: Number(id),
        price: Number(price)
    }

    updateQuery(newObj);

    return res.sendStatus(200);

}

function productDelete(req: Request, res: Response){

    deleteProduct(Number(req.query.id));

    res.sendStatus(200);

}

export { postProduct, filterProduct, updateProducts, productDelete };