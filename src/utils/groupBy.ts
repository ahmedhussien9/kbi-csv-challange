import Product from "../models/product.model";

/**
 *
 * @param list
 * @param keyGetter
 * Mapper (product: Product) => product.name //
 * each group name such as 'shoes' and 'forks' which is the name of the product
 * @returns
 *'shoes' => [ { brand: 'Air' }, { brand: 'Air' }, { brand: 'BonPied' } ],
 *'forks' => [ { brand: 'Pfitzcraft' } ]
 */
export default function (products: Product[], keyGetter) {
  const map = new Map();
  products.forEach((item: Product) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [{ brand: item.brand }]);
    } else {
      collection.push({ brand: item.brand });
    }
  });
  return map;
}
