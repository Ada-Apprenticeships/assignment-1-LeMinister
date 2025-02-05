import Product from "./Product.js";
import Inventory from "./Inventory.js";

// Sample usage
const inventory = new Inventory();
const product1 = new Product("A123", "T-shirt", 29.49, 100);
const product2 = new Product("B456", "pad", 599.99, 20);



  try {
    const tshirt = ProductFactory.createProduct('clothing', 'A123', 'T-shirt', 29.49, 100, 'M', 'Silk');
    const tablet = ProductFactory.createProduct('electronic', 'B456', 'Tablet', 599.99, 20, 'windows', '2 year');
  
    inventory.addProduct(tshirt);
    inventory.addProduct(tablet);
    
    inventory.updateQuantity('A123', 50);
    const retrievedProduct = inventory.getProduct('B456');
    console.log(retrievedProduct);
    
    inventory.removeProduct('A123');
  } catch (error) {
    console.error("An error occurred:", error.message);
  }