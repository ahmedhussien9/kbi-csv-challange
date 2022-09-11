const createCsvWriter = require("csv-writer").createObjectCsvWriter;
import * as path from "path";

/**
 * Save records to CSV file
 *
 * @param records
 * @param csvPathFile
 * @param header
 */
export default function writeToCSVFile(
  records: any,
  csvPathFile: string,
  header: string[] | any
) {
  const writer = createCsvWriter({
    path: path.resolve(__dirname, csvPathFile),
    header: header,
  });

  writer
    .writeRecords(records)
    .then(() => {
      console.log(`Records Saved Successfuly to ${csvPathFile}`);
    })
    .catch((err) => {
      console.log("Save failed", err);
    });
}
