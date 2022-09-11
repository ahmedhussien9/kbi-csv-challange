import { PRODUCTS_MOCK } from "../../mock/products";
import Product from "../../classes/product";
import groupBy from "./../groupBy";

describe("test groupBy function", () => {
  it("should check first group key name (product name)", () => {
    const products = PRODUCTS_MOCK;
    let mapper = (product: Product) => product.name;
    let grouped = new Map();
    let groubByKey = "brand";
    let brandName = "Intelligent Copper Knife";

    grouped = groupBy(products, mapper, groubByKey);
    expect(grouped.has(brandName)).toBeTruthy();
  });

  it("should check second group key name (product name)", () => {
    const products = PRODUCTS_MOCK;
    let mapper = (product: Product) => product.name;
    let grouped = new Map();
    let groubByKey = "brand";
    let brandName = "Small Granite Shoes";

    grouped = groupBy(products, mapper, groubByKey);
    expect(grouped.has(brandName)).toBeTruthy();
  });

  it("should return first product group brands", () => {
    const products = PRODUCTS_MOCK;
    let mapper = (product: Product) => product.name;
    let grouped = new Map();
    let groubByKey = "brand";
    let productName = "Intelligent Copper Knife";

    grouped = groupBy(products, mapper, groubByKey);
    expect(grouped.get(productName)).toStrictEqual([
      { brand: "Hilll-Gorczany" },
      { brand: "Kunze-Bernhard" },
      { brand: "Hilll-Gorczany" },
      { brand: "Hilll-Gorczany" },
    ]);
  });

  it("should return product area group length", () => {
    const products = PRODUCTS_MOCK;
    let mapper = (product: Product) => product.name;
    let grouped = new Map();
    let groupByKey = "area";
    let productName = "Intelligent Copper Knife";
    grouped = groupBy(products, mapper, groupByKey);
    expect(grouped.get(productName).length).toEqual(4);
  });
});
