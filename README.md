# CSV program challange

CSV is a program that will read some products records from csv files and should output two csv files with the Average product quantites &  The most popular brand.

## Technologies

- NodeJS with typescript
- Jest for testing



## Installation

CSV program requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd kbi-csv-challange
npm i
npm run start:dev
```

After that you can watch the result through the termianl and if you want to check the input & output files you can check the files folder you'll find the below files:
 - input_example.csv (the input csv data)..
 - 0_input_example.csv (The first output for product average quantites ).
 - 1_input_example.csv (The second output for the most popular brands ).


## files/input_example.csv

ID944806,Willard Vista,Intelligent Copper Knife,3,Hilll-Gorczany

ID644525,Roger Centers,Intelligent Copper Knife,1,Kunze-Bernhard

ID348204,Roger Centers,Small Granite Shoes,4,Rowe and Legros

ID710139,Roger Centers,Intelligent Copper Knife,4,Hilll-Gorczany

ID426632,Willa Hollow,Intelligent Copper Knife,4,Hilll-Gorczany

## files/0_input_example.csv

Intelligent Copper Knife,2.4

Small Granite Shoes,0.8

## files/1_input_example.csv

Intelligent Copper Knife,Hilll-Gorczany

Small Granite Shoes,Rowe and Legros


## How it works

- The program should be up and running by using the below command
   ```sh
   npm run start:dev
   ```
- In the files folder you'll find a file called input_example.csv which has the product records, and two other files for the output.
- Enter your test data, however make sure to enter the same structure coloumns. 
- Finally, After adding the test data you'll find the output will be printed directly in the two files 0_input_example.csv and 1_input_example.csv


## Tests 
```sh
npm run test
```


## Challange 1 solution steps ( Average Product Quantities)
- Grouped each product with all of their quanities 
- Iterate over the group and calucalate their quanities / total order records
- Example for Final results will be {name: 'shoes', 'averageQty': 2.5}
- Finally, use csv writer for generating the output.

## Challange 2 solution steps (Most Popular Brands)
- Get product names as a unique list ['shoes', 'forks'];
- Iterate over the product names.
- Group each product name with their brands
- get most popular product brand for each single product
- generate list with the product name & the most popular brand
- generate csv file with the end output.

MIT

**Free Software, Hell Yeah!**



