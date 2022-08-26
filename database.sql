-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE groceryList (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL(5,2) NOT NULL,
	"unit" VARCHAR(20),
	"purchased" BOOLEAN
	);

INSERT INTO groceryList ("name", "quantity", "unit", "purchased")
VALUES ('apples', '2.00', 'each', 'false');