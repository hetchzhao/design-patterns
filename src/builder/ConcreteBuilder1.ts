import IBuilder from "./IBuilder";
import Product from "./Product1";

export default class ConcreteBuilder1 implements IBuilder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  public reset() {
    this.product = new Product();
  }

  public getProduct() {
    const result = this.product;
    this.reset();
    return result;
  }

  public producePartA() {
    this.product.parts.push("PartA1");
  }

  public producePartB() {
    this.product.parts.push("PartB1");
  }

  public producePartC() {
    this.product.parts.push("PartC1");
  }
}
