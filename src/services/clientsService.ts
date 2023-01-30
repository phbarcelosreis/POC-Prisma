import prisma from "../database/db.js";
import { Client } from "../protocols/product.js";

async function addClient(newClient: Client): Promise<void> {

    const { name, address } = newClient;

    await prisma.newClients.create({
        data: {
            name,
            address,
        },
    });

}

export { addClient };