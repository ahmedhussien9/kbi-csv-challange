import Product from "../classes/product";

export interface IProductQuantitesGroup {
  [key: string]: number[];
}

export default function groupProductQuantites(
  products: Product[]
): IProductQuantitesGroup[] {
  return products.reduce((a: any, e: Product) => {
    if (!a[e.name]) {
      a[e.name] = [];
    }
    a[e.name].push(parseInt(e.quantity));
    return a;
  }, {});
}
