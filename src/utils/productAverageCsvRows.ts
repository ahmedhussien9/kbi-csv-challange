export default function createProductAverageQuantityRows(group: any) {
    const rows: any = [];
    Object.keys(group).forEach(function (key) {
        rows.push({ name: key, quantity: group[key] })
    });
    return rows;
}