import Clothing from './clothing.js';
import Electronics from './electronic.js';

class ProductFactory {
    static createProduct(type, id, name, price, quantity, ...additionalParams) {
        switch (type.toLowerCase()) {
            case 'clothing':
                return new Clothing(id, name, price, quantity, ...additionalParams);
            case 'electronics':
                return new Electronics(id, name, price, quantity, ...additionalParams);
            default:
                throw new Error(`Unknown product type: ${type}`);
        }
    }
}

export default ProductFactory;
