


-- Get Products 
SELECT products.id, products.name, products.price, products.ingredients, product_imgs.image_name FROM products LEFT JOIN product_imgs ON products.id = product_imgs.product_id GROUP BY products.id, products.name, products.price, products.ingredients;


-- Insert one data in table
INSERT INTO `products` (`name`, `price`, `ingredients`) 
VALUES ('Cold Coffee Chocolate flavour', '200.50', 'Milk, Ice, Suger, Coffee Powder, Chocolate');