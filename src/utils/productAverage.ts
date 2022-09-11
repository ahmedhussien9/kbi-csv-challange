import { IProductGroup } from "./groupProductQuntites";

export default function productsAverages(
  groupOfProductQuntites: IProductGroup[],
  totalRecords: number
) {
  return Object.fromEntries(
    Object.entries(groupOfProductQuntites).map(([k, v]: [string, any]) => [
      k,
      v.reduce((a: any, e: any) => a + e, 0) / totalRecords,
    ])
  );
}
