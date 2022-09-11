import { PRODUCTS_MOCK } from "../../mock/products";
import groupProductQuantites from "../groupProductQuntites";

describe("should test function group of product quantities", () => {
  const products = PRODUCTS_MOCK;

  const output = {
    "Intelligent Copper Knife": [3, 1, 4, 4],
    "Small Granite Shoes": [4],
  };

  it("should check equality of group of products quantites", () => {
    const groupOfProductQuntites = groupProductQuantites(products);
    expect(groupOfProductQuntites).toStrictEqual(output);
  });

  it("should check equality of first product group quantity list", () => {
    const groupOfProductQuntites = groupProductQuantites(products);
    const productName = "Intelligent Copper Knife";
    expect(groupOfProductQuntites[productName]).toEqual([3, 1, 4, 4]);
  });

  it("should check equality of second product group quantity list", () => {
    const groupOfProductQuntites = groupProductQuantites(products);
    const productName = "Small Granite Shoes";
    expect(groupOfProductQuntites[productName]).toEqual([4]);
  });
});
