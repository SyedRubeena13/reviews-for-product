import { Seller } from "./seller";

export class Product {
    productId!: number;
    productName!: String;
    productPrice!: number;
    category!: String;
    approve!: boolean;
    // sellerId!: number;
    // seller!: String;
    seller!: Seller;
    products_product_id!:number;
}
