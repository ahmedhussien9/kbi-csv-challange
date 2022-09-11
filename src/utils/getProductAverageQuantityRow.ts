import { IProductAverageQuantityRow } from "../interfaces/IProductAverageQuantityRow.interface";


export default function getProductAveragerQuantityRow(group: any): IProductAverageQuantityRow[] {
  const rows: IProductAverageQuantityRow[] = [];
  Object.keys(group).forEach(function (key) {
    rows.push({ name: key, averageQty: group[key] });
  });
  return rows;
}
