import { Subject } from "rxjs"

export interface Example {

  name: string;
  outputSubject: Subject<string>

  execute(): void
  getOutputSubject(): Subject<string>

}
