import Product from './Product.js';
import Inventory from './Inventory.js';
import Electronics from './electronic.js';
import Clothing from './clothing.js';
import ProductFactory from './ProductFactory.js';

describe("Inventory", () => {
    let inventory;
    let clothingT, electronicsT
  
    beforeEach(() => {
      inventory = new Inventory();
      clothingT = new Clothing('clothing', 'Z321', 't-shirt',29.49,100,'M','Silk');
      electronicsT = new Electronics('electronic','M92002','Tablet',599.99, 20,'windows','2 year');
        });
  
    describe("Adding Products", () => {
      test("can add products to the inventory", () => {
        inventory.addProduct(clothingT);
        inventory.addProduct(electronicsT);
        expect(inventory.getNumOfItems()).toBe(2);
      });
  
    });
  
    describe("Updating Product Quantities", () => {
      test("can update the quantity of clothing", () => {
        inventory.addProduct(clothingT);
        inventory.updateQuantity("Z321", 7);
        expect(inventory.getProduct("Z321").quantity).toBe(7);
      });
  
      test("can update the quantity of electronics", () => {
        inventory.addProduct(electronicsT);
        inventory.updateQuantity("M92002", 99);
        expect(inventory.getProduct("M92002").quantity).toBe(99);
      });
  
    });
  
  
    describe("Removing Products", () => {
      test("can remove a product from the inventory", () => {
        inventory.addProduct(clothingT);
        inventory.addProduct(electronicsT);
        inventory.removeProduct("Z321");
        expect(() => inventory.getProduct("Z321")).toThrowError(`Product with ID Z321 not found.`);
        expect(inventory.getProduct("M92002")).toEqual(electronics1.getProductDetails());
      });
  
    
    });
  
    describe("Retrieving Product Details", () => {
      test("can retrieve the details of products", () => {
          inventory.addProduct(clothingT);
          inventory.addProduct(electronicsT);
          
          expect(inventory.getProduct("Z321")).toEqual({
              id: "Z321",
              name: "t-shirt",
              price: 29.49,
              quantity: 100,
              size: "M",
              material: "silk",
          });
  
          expect(inventory.getProduct("M92002")).toEqual({
              id: "M92002",
              name: "tablet",
              price: 599.99,
              quantity: 20,
              brand: "samsung",
              warranty: 2
          });
      });
    });
  
  });
  
  
  
    describe("Electronics Class Tests", () => {
      test("should instantiate Electronics correctly", () => {
        const electronics = new Electronics("1", "Laptop", 1000, 10, "Brand", 2);
        expect(electronics).toBeInstanceOf(Electronics);
        expect(electronics.getProductDetails()).toEqual({
          id: "1",
          name: "Laptop",
          price: 1000,
          quantity: 10,
          brand: "Brand",
          warranty: 2,
        })
      });
    
    });
    
    describe("Clothing Class Tests", () => {
      test("should instantiate Clothing correctly", () => {
        const clothing = new Clothing("1", "T-Shirt", 20, 50, "M", "Cotton");
        expect(clothing).toBeInstanceOf(Clothing);
        expect(clothing.getProductDetails()).toEqual({
          id: "1",
          name: "T-Shirt",
          price: 20,
          quantity: 50,
          size: "M",
          material: "Cotton",
        })
      });
    
    
    
      
    });

  
  
  describe("ProductFactory", () => {
    test("creates a Clothing product correctly", () => {
      const product = ProductFactory.createProduct("Clothing", "C123", "Sweater", 29.99, 50, "M", "Wool");
      expect(product).toBeInstanceOf(Clothing);
      expect(product.getProductDetails()).toEqual({
        id: "C123",
        name: "Sweater",
        price: 29.99,
        quantity: 50,
        size: "M",
        material: "Wool",
      });
    });
  
    test("creates an Electronics product correctly", () => {
      const product = ProductFactory.createProduct("Electronics", "E456", "Laptop", 1299.99, 20, "Microsoft", 2);
      expect(product).toBeInstanceOf(Electronics);
      expect(product.getProductDetails()).toEqual({
        id: "E456",
        name: "Laptop",
        price: 1299.99,
        quantity: 20,
        brand: "Microsoft",
        warranty: 2,
      });
    });
  
    
  });