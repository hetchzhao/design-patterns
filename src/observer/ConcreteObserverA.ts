import IObserver from "./IObserver";
import ISubject from "./ISubject";
import ConcreteSubject from "./ConcreteSubject";

export default class ConcreteObserverA implements IObserver {
  public update(subject: ISubject) {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}
