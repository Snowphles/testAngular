import { Subject } from "rxjs";
import { Example } from "../example";
import { Animal, Dog, Crow } from "./animals";

export class AnimalExample implements Example{

    name = "animal examples";
    outputSubject: Subject<string>;

    constructor(){
      this.outputSubject = new Subject();
    }

    execute() {
      this.outputSubject.next("Creating animals...");
      let boshi = new Dog("Boshi", "Shiba Inu", "Orange Blonde", 20, new Date("2016-08-15T00:00:00"));
      this.outputSubject.next("Dog created: ");
      this.outputSubject.next(JSON.stringify(boshi));
      let marshmallow = new Dog("Marshmallow", "Border Collie", "Black and White", 30, new Date("2017-04-15T00:00:00"))
      this.outputSubject.next("Dog created: ");
      this.outputSubject.next(JSON.stringify(marshmallow));
      let fennel = new Crow("Fennel", 1, 100, new Date("2021-01-01T00:00:00"))
      this.outputSubject.next("Crow created: ");
      this.outputSubject.next(JSON.stringify(fennel))
    }

    getOutputSubject(): Subject<string> {
      return this.outputSubject;
    }
}