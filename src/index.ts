import products from "./products.json";

class Product {
    id: number;
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    static findProductsBelow(price: number) {
        return products.filter((prod) => prod.price < price);
    }
}

class User {
    name: string;
    products: Product[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addProduct(newProduct: Product) {
        this.products.push(newProduct);
    }

    addProducts(newProducts: Product[]) {
        newProducts.map((prod) => {
            this.addProduct(prod);
        });
    }
}

export { User, Product };
