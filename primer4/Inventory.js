import Product from './Product.js';

class Inventory {
    constructor() {
        this.products = new Map();  // Store products by their ID
    }

    addProduct(product) {
        if (!(product instanceof Product)) {
            throw new Error("Only products of type Product or its subclasses can be added.");
        }
        if (this.products.has(product.id)) {
            throw new Error(`Product ${product.id} already exists.`);
        }
        this.products.set(product.id, product);
    }

    updateQuantity(id, quantity) {
        const product = this.products.get(id);
        if (!product) {
            throw new Error(`Product ${id} isn't found.`);
        }
        product.quantity = quantity;
    }

    getProduct(id) {
        if (!this.products.has(id)) {
            throw new Error(`Product ${id} isn't found.`);
        }
        return this.products.get(id).getProductDetails();
    }

    removeProduct(id) {
        if (!this.products.has(id)) {
            throw new Error(`Product ${id} isn't found.`);
        }
        this.products.delete(id);
    }

    getNumOfItems() {
        return this.products.size;
    }
}

export default Inventory;
