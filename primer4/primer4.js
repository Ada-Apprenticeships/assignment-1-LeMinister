 {(error.message);
}
import Product from "./Product.js";
import Inventory from "./Inventory.js";

/// Inventory.js
const Product = require('./Product');  // Add this import

class Inventory {
  constructor() {
    this.products = new Map();  // Store products by their ID
  }

  addProduct(product) {
    if (!(product instanceof Product)) {
      throw new Error("Only products of type Product or its subclasses can be added.");
    }
    this.products.set(product.id, product);
  }

  updateQuantity(id, quantity) {
    const product = this.products.get(id);
    if (product) {
      product.quantity = quantity;
    } else {
      throw new Error(`Product with ID ${id} not found.`);
    }
  }

  getProduct(id) {
    return this.products.get(id);
  }

  removeProduct(id) {
    if (this.products.has(id)) {
      this.products.delete(id);
    } else {
      throw new Error(`Product with ID ${id} not found.`);
    }
  }

  getNumOfItems() {
    return this.products.size;
  }
}

module.exports = Inventory;


// Clothing.js
const Product = require('./Product');

class Clothing extends Product {
  constructor(id, name, price, quantity, size, material) {
    super(id, name, price, quantity);
    this.size = size;
    this.material = material;
  }

  getProductDetails() {
    return `${this.name} (ID: ${this.id}) - Size: ${this.size}, Material: ${this.material}, Price: $${this.price}, Quantity: ${this.quantity}`;
  }
}

module.exports = Clothing;

// Electronics.js
const Product = require('./Product');

class Electronics extends Product {
  constructor(id, name, price, quantity, brand, warranty) {
    super(id, name, price, quantity);
    this.brand = brand;
    this.warranty = warranty;
  }

  getProductDetails() {
    return `${this.name} (ID: ${this.id}) - Brand: ${this.brand}, Warranty: ${this.warranty}, Price: $${this.price}, Quantity: ${this.quantity}`;
  }
}

module.exports = Electronics;



// Sample usage
const inventory = new Inventory();
const product1 = new Product("A123", "T-shirt", 19.99, 100);
const product2 = new Product("B456", "Jeans", 49.99, 50);

try {
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  inventory.updateQuantity("A123", 50);
  const retrievedProduct = inventory.getProduct("B456");
  console.log(retrievedProduct);
  inventory.removeProduct("A123");
} catch (error) {
  console.error("An error occurred:",)}