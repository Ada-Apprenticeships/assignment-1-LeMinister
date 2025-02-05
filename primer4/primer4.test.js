import Product from './Product.js';
import Inventory from './Inventory.js';
import Electronics from './electronic.js';
import Clothing from './clothing.js';
import ProductFactory from './ProductFactory.js';
describe('Inventory', () => {
    let inventory;
    let product1, product2;

    beforeEach(() => {
        inventory = new Inventory();
        product1 = Product.createProduct("clothing", "A123", "T-shirt", 19.99, 100, "M", "Cotton");
        product2 = Product.createProduct("clothing", "B456", "Jeans", 49.99, 50, "L", "Denim");
    });

    describe('Adding Products', () => {
        test('can add products to the inventory', () => {
            inventory.addProduct(product1);
            inventory.addProduct(product2);
            expect(inventory.getNumOfItems()).toBe(2);
        });

        test('throws error when adding a product with a duplicate ID', () => {
            inventory.addProduct(product1);
            expect(() => inventory.addProduct(product1)).toThrowError(`Product with ID ${product1.id} already exists.`);
        });
    });

    describe('Updating Product Quantities', () => {
        test('can update the quantity of a product', () => {
            inventory.addProduct(product1);
            inventory.updateQuantity("A123", 75);
            expect(inventory.getProduct("A123").quantity).toBe(75);
        });

        test('throws error when updating the quantity of a non-existent product', () => {
            expect(() => inventory.updateQuantity("C789", 75)).toThrowError(`Product with ID C789 not found.`);
        });
    });

    describe('Removing Products', () => {
        test('can remove a product from the inventory', () => {
            inventory.addProduct(product1);
            inventory.addProduct(product2);
            inventory.removeProduct("A123");
            expect(() => inventory.getProduct("A123")).toThrowError(`Product with ID A123 not found.`);
            expect(inventory.getNumOfItems()).toBe(1);
        });

        test('throws error when removing a non-existent product', () => {
            expect(() => inventory.removeProduct("C789")).toThrowError(`Product with ID C789 not found.`);
        });
    });

    describe('Retrieving Product Details', () => {
        test('can retrieve the details of products', () => {
            inventory.addProduct(product1);
            inventory.addProduct(product2);
            
            expect(inventory.getProduct("A123")).toEqual({
                id: "A123",
                name: "T-shirt",
                price: 19.99,
                quantity: 100,
                size: "M",
                material: "Cotton"
            });

            expect(inventory.getProduct("B456")).toEqual({
                id: "B456",
                name: "Jeans",
                price: 49.99,
                quantity: 50,
                size: "L",
                material: "Denim"
            });
        });
    });
});
