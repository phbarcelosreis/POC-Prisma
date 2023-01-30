import { string } from "joi";
import { ParsedQs } from "qs";
import prisma from "../database/db.js";
import { checkUpdate, Product } from "../protocols/product.js";


async function addProducts(newProduct: Product) {
    const { name, price, description } = newProduct;


    await prisma.products.create({
        data: {
            name,
            price,
            description,
        },
    })

}

async function getAllProducts() {

    return prisma.products.findMany();

}

async function filterProductsByName(name: string | ParsedQs | string[] | ParsedQs[]) {

    const nameStr = typeof name === 'string' ? name : name[0]

    const result = await prisma.products.findMany({
        where: {
            name: {
                contains: nameStr,
            },
        },
    })

    return result;

}

async function filterProductsById(id: number) {

    const result = await prisma.products.findFirst({
        where: {
            id,
        },
    })

    return result;

} 

async function updateQuery(newObj: checkUpdate) {

    const { id, price } = newObj

    await prisma.products.update({
        where: {
            id,
        },
        data: {
            price,
        },
    })

}

async function deleteProduct(id: number) {

    await prisma.products.delete({
        where: {
            id,
        },
    })

}


export {
    addProducts,
    filterProductsByName,
    filterProductsById,
    updateQuery,
    getAllProducts,
    deleteProduct
}