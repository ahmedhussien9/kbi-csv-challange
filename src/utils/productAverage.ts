import { IProductQuantitesGroup } from "./groupProductQuntites";
/**
 *
 * @param groupOfProductQuntites
 * @param totalRecords
 * @returns
 */
export default function (
  groupOfProductQuntites: IProductQuantitesGroup[],
  totalRecords: number
) {
  return Object.fromEntries(
    Object.entries(groupOfProductQuntites).map(([k, v]: [string, any]) => [
      k,
      v.reduce((a: any, e: any) => a + e, 0) / totalRecords,
    ])
  );
}
