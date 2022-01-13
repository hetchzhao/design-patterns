import IMemento from "./IMemento";
import ConcreteMemento from "./ConcreteMemento";

export default class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  /**
   * The Originator's business logic may affect its internal state. Therefore,
   * the client should backup the state before launching methods of the
   * business logic via the save() method.
   */
  public doSomething(): void {
    console.log("Originator: I'm doing something important.");
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  private generateRandomString(length: number = 10): string {
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array.apply(null, { length })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join("");
  }

  /**
   * Saves the current state inside a memento.
   */
  public save(): IMemento {
    return new ConcreteMemento(this.state);
  }

  /**
   * Restores the Originator's state from a memento object.
   */
  public restore(memento: IMemento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}
