import groupProductQuntities, { IProductGroup } from "../utils/groupProductQuntites";
import productsAverages from "../utils/productAverage";
import Product from "./product.model";


export default class Order {

    private totalRecords: number;

    constructor(public orderProducts: Product[]) {
        this.orderProducts = orderProducts;
        this.totalRecords = this.orderProducts.length;
    }

    averageProductQuntity() {
        const groupOfProductQuntites: IProductGroup[] = groupProductQuntities(this.orderProducts);
        const avgs = productsAverages(groupOfProductQuntites, this.totalRecords);
        return avgs;
    }

}