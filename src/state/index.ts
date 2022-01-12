import Context from "./Context";
import ConcreteStateA from "./ConcreteStateA";

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
