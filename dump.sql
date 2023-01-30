CREATE TABLE "products" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(80) NOT NULL UNIQUE,
	"price" NUMERIC(10,2) NOT NULL,
	"description" TEXT
);

CREATE TABLE "newClients" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(80) NOT NULL UNIQUE,
	"address" VARCHAR(255) NOT NULL
);

CREATE TABLE "newOrders" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"clientId" INTEGER NOT NULL REFERENCES "newClients"("id"),
	"productsId" INTEGER NOT NULL REFERENCES "products"("id"),
	"quantity" INTEGER NOT NULL,
	"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
	"totalPrice" NUMERIC(10,2) NOT NULL
);

ALTER TABLE products
ALTER COLUMN "price" TYPE DOUBLE PRECISION USING "price"::double precision;

ALTER TABLE "newOrders"
ALTER COLUMN "totalPrice" TYPE DOUBLE PRECISION USING "totalPrice"::double precision;