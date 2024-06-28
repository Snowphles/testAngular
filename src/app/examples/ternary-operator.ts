import { Subject } from "rxjs";
import { Example } from "./example";

export class TernaryOperator implements Example{

  name = "Ternary Operator Example";
  outputSubject: Subject<string>;

  constructor(){
    this.outputSubject = new Subject();
  }

  execute() {
    let a = 4
    let b = 2
    let output = a > b ? "a is greater than b" : "a is not greater than b";
    this.outputSubject.next(output);
  }

  getOutputSubject(): Subject<string> {
    return this.outputSubject;
  }

}