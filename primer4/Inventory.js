// Inventory.js
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
      throw new Error("Product not found.");
    }
  }

  getProduct(id) {
    return this.products.get(id);
  }

  removeProduct(id) {
    if (this.products.has(id)) {
      this.products.delete(id);
    } else {
      throw new Error("Product not found.");
    }
  }

  getNumOfItems() {
    return this.products.size;
  }
}

module.exports = Inventory;


export default Inventory;