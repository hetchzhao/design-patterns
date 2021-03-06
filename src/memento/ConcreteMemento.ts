import IMemento from "./IMemento";

export default class ConcreteMemento implements IMemento {
  private state: string;

  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
  }

  /**
   * The Originator uses this method when restoring its state.
   */
  public getState(): string {
    return this.state;
  }

  /**
   * The rest of the methods are used by the Caretaker to display metadata.
   */
  public getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}
