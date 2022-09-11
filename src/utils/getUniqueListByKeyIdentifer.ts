import Product from "../classes/product";

/**
 * Group Unique products based on keyGetter value
 * @param products
 * @returns
 * ['shoes', 'forks']
 */
export default function (products: Product[], keyGetter) {
  return Array.from(new Set(products.map(keyGetter)));
}
