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
 - input_example.csv (the input csv data) like below.
 - 0_input_example.csv (The first output for product average quantites ).
 - 1_input_example.csv (The second output for the most popular brands ).

## input_example.csv

ID944806,Willard Vista,Intelligent Copper Knife,3,Hilll-Gorczany

ID644525,Roger Centers,Intelligent Copper Knife,1,Kunze-Bernhard

ID348204,Roger Centers,Small Granite Shoes,4,Rowe and Legros

ID710139,Roger Centers,Intelligent Copper Knife,4,Hilll-Gorczany

ID426632,Willa Hollow,Intelligent Copper Knife,4,Hilll-Gorczany

## 0_input_example.csv

Intelligent Copper Knife,2.4

Small Granite Shoes,0.8

## 1_input_example.csv

Intelligent Copper Knife,Hilll-Gorczany

Small Granite Shoes,Rowe and Legros

## Tests 
```sh
npm run test
```


MIT

**Free Software, Hell Yeah!**



