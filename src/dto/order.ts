import groupProductBrand from "../utils/getMostPopularBrands";
import groupProductQuntities, {
  IProductQuantitesGroup,
} from "../utils/groupProductQuntites";
import productsAverages from "../utils/getProductsAverageQuantities";
import Product from "./product";

export default class Order {
  private totalRecords: number;

  constructor(public orderProducts: Product[]) {
    this.orderProducts = orderProducts;
    this.totalRecords = this.orderProducts.length;
  }

  getProductsQuantitesAverage() {
    const groupOfProductQuntites: IProductQuantitesGroup[] =
      groupProductQuntities(this.orderProducts);
    const avgs = productsAverages(groupOfProductQuntites, this.totalRecords);
    return avgs;
  }

  showMostPopularBrands() {
    return groupProductBrand(this.orderProducts);
  }
}
