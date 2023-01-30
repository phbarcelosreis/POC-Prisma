CREATE TABLE "products" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(80) NOT NULL UNIQUE,
	"price" NUMERIC(10,2) NOT NULL,
	"description" TEXT
);

ALTER TABLE products
ALTER COLUMN "price" TYPE DOUBLE PRECISION USING "price"::double precision;