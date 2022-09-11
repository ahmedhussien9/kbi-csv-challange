import Product from "../classes/product";

/**
 *
 * @param products
 * @param keyGetter
 * Mapper (product: Product) => product.name //
 * each group name such as 'shoes' and 'forks' which is the name of the product
 * @returns
 *'shoes' => [ { brand: 'Air' }, { brand: 'Air' }, { brand: 'BonPied' } ],
 *'forks' => [ { brand: 'Pfitzcraft' } ]
 */

export default function groupBy(products: Product[], keyGetter, groupByKey: string) {
  const map = new Map();
  products.forEach((item: Product) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [{ [groupByKey]: item[groupByKey] }]);
    } else {
      collection.push({ [groupByKey]: item[groupByKey] });
    }
  });
  return map;
}
