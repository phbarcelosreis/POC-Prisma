import prisma from "../src/database/db.js";

async function main() {
    await prisma.products.createMany({
        data: [
            {
                name: "Tortinha",
                price: 20,
                description: "tortinha muito deliciosa"
            },
            {
                name: "Bolo de Cenoura",
                price: 7,
                description: "Bolinho gostoso de cenoura"
            },
            {
                name: "Pudim de Chocolate",
                price: 9,
                description: "Pudim só que de chocolate"
            }
        ]
    })
}

main().
    then(() => {
        console.log("Registro feito com sucesso!")
    }).
    catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
    