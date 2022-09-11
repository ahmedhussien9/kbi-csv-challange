import Product from "../classes/product";

/**
 *
 * @param products
 * @returns Brand name per product Like Air
 * Air
 */
export default function (products: Product[], key: string) {
  const hashmap = products.reduce((acc, val) => {
    acc[val[key]] = (acc[val[key]] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(hashmap).reduce((a, b) => {
    return hashmap[a] > hashmap[b] ? a : b;
  });
}
