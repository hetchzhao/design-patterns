import IBuilder from "./IBuilder";

export default class Director {
  private builder!: IBuilder;

  public setBuilder(builder: IBuilder) {
    this.builder = builder;
  }

  public buildMinimalViableProduct() {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct() {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}
