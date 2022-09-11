import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";
import Product from "./models/product.model";
import Order from "./models/order.model";
import writeToCSVFile from "./lib/csv-write";
import createProductAverageQuantityRows from "./utils/productAverageCsvRows";
import productsAverages from "./utils/productAverage";
import groupProductBrand from "./utils/groupProductBrand";

(() => {
  const csvFilePath = path.resolve(__dirname, "files/input_example.csv");

  /**
   * CSV file table header names
   */
  const headers = ["id", "area", "name", "quantity", "brand"];

  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

  /**
   * parse file content and column headers
   */
  parse(
    fileContent,
    {
      delimiter: ",",
      columns: headers,
    },
    (error, orders: Product[]) => {
      /**
       * Modeling the order product to product model
       */
      orders = orders.map(
        (product: Product) =>
          new Product(
            product.id,
            product.area,
            product.name,
            product.quantity,
            product.brand
          )
      ) as Product[];
      /**
       * Modeling the orders to order model
       */
      const order = new Order(orders);
      console.log(groupProductBrand(orders));

      /**
       * Generate 1 Input example - The Most Popular Brands
       */

      const First_INPUT_EXAMPLE_CSV_HEADER = ["name", "brand"];
      const BRANDS_RECORDS = groupProductBrand(orders);
      const FIRST_INPUT_EXAMPLE_FILE_PATH = "./../files/1_input_example.csv";
      console.log(BRANDS_RECORDS);
      writeToCSVFile(
        BRANDS_RECORDS,
        FIRST_INPUT_EXAMPLE_FILE_PATH,
        First_INPUT_EXAMPLE_CSV_HEADER
      );

      /**
       *  Generate Zero Input example - The Avrage product Qunatity
       *
       */
      const ZERO_INPUT_EXAMPLE_CSV_HEADER = ["name", "quantity"];
      const PRODCUT_AVG_RECORDS = createProductAverageQuantityRows(
        order.averageProductQuntity()
      );
      console.log(PRODCUT_AVG_RECORDS);
      const ZERO_INPUT_EXAMPLE_FILE_PATH = "./../files/0_input_example.csv";

      writeToCSVFile(
        PRODCUT_AVG_RECORDS,
        ZERO_INPUT_EXAMPLE_FILE_PATH,
        ZERO_INPUT_EXAMPLE_CSV_HEADER
      );
      // End //

      if (error) {
        console.error(error);
      }
    }
  );
})();
