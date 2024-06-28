import { Injectable, OnInit } from '@angular/core';
import { Example } from './examples/example';
import { AnimalExample } from './examples/animals/animal-example';
import { TernaryOperator } from './examples/ternary-operator';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  examples: Example[];

  constructor() {
    this.examples = [];
    this.examples.push(new AnimalExample());
    this.examples.push(new TernaryOperator());
  }

  getExamples(): Example[]{
    return this.examples;
  }
  
}
