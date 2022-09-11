export interface IGroupProductByBrandName {
  [key: string]: Ibrand[];
}

export interface Ibrand {
  brand: string;
}

export interface MostPopularBrand {
  name: string;
  brand: string;
}
