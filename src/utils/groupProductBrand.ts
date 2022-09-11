import Product from "../models/product.model";
import groupBy from "./groupBy";
import groupUniqueProducts from "./groupUniqueProducts";
import getMostPopularBrand from "./popularBrand";

interface IGroupProductByBrandName {
  [key: string]: Ibrand[];
}

interface Ibrand {
  brand: string;
}

interface MostPopularBrand {
  name: string;
  brand: string;
}

export default function mostPopularBrands(products: Product[]) {
  const productsNames = groupUniqueProducts(
    products,
    (p: Product) => p.name
  ) as any;

  let brands: MostPopularBrand[] = [];
  let grpPrdByBrandNam = {};
  let grpPrdsByTheirBrands = new Map();

  for (let index = 0; index < productsNames.length; index++) {
    const prdName: string = productsNames[index];
    grpPrdsByTheirBrands = groupBy(
      products,
      (product: Product) => product.name
    ); // Map(2) {'shoes' => [ { brand: 'Air' }, { brand: 'Air' }, { brand: 'BonPied' } ],'forks' => [ { brand: 'Pfitzcraft' } ]}
    grpPrdByBrandNam[prdName] = grpPrdsByTheirBrands.get(
      prdName
    ) as IGroupProductByBrandName; // { shoes: [ { brand: 'Air' }, { brand: 'Air' }, { brand: 'BonPied' } ], forks: [ { brand: 'Pfitzcraft' } ] }
    brands.push({
      name: prdName,
      brand: getMostPopularBrand(grpPrdByBrandNam[prdName], "brand"),
    });
  }
  return brands as MostPopularBrand | MostPopularBrand[]; // [{ name: 'shoes', brand: 'Air' },{ name: 'forks', brand: 'Pfitzcraft' }];
}
