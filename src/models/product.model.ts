import { IProduct } from "../interfaces/Iproduct.interface";

export default class Product implements IProduct {
  constructor(
    public id: string,
    public area: string,
    public name: string,
    public quantity: string,
    public brand: string
  ) {}
}
