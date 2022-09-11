import Product from "../classes/product";
export interface IOrder {
  order: Product[];
  getProductsQuantitesAverage: () => void;
}
