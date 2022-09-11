import Product from "../models/product.model";

export interface IProductGroup {
  [key: string]: number[];
}

export default function groupProductQuntities(
  products: Product[]
): IProductGroup[] {
  return products.reduce((a: any, e: Product) => {
    if (!a[e.name]) {
      a[e.name] = [];
    }
    a[e.name].push(parseInt(e.quantity));
    return a;
  }, {});
}
