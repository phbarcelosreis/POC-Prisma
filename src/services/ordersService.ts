import prisma from "../database/db.js";
import { Order } from "../protocols/product.js";

async function addOrder(newOrder: Order) {

    const { clientId, productsId, quantity, totalPrice } = newOrder;

    await prisma.newOrders.create({
        data: {
            clientId,
            productsId,
            quantity,
            totalPrice
        },
    });

}

async function checkClient(clientId: number) {

    const order = await prisma.newClients.findFirst({
        where: {
            id: clientId,
        },
    });

    return order;

}

async function checkProduct(productId: number) {

    const product = await prisma.products.findFirst({
        where: {
            id: productId
        },
    });

    return product;

}

export { addOrder, checkClient, checkProduct };