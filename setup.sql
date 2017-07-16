CREATE database Bamazon;

USE Bamazon;

CREATE table products (
item_id INT auto_increment primary key,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price decimal(6,2) NOT NULL,
stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Topo Chico", "Beverages", 1.25, 100),
("Air Force Ones", "Dope Gear", 335.00, 50),
("Beer", "Beverages", 35.00, 100),
("Strike Anywhere Matches", "Survival", 7.50, 100),
("Tactical Shovel", "Survival", 45.00, 25),
("MF DOOM tShirt", "Dope Gear", 29.99, 10),
("Dried Milk Steak", "Survival", 12.45, 100),
("Tight Pants", "Dope Gear", 18.99, 25),
("Milk", "Beverages", 0.44, 1000),
("Rope", "Survival", 5.25, 200),
("Cuban Links", "Dope Gear", 2199.99, 100),
("Whiskey", "Beverages", 25.25, 100);