import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal, Crow, Dog } from './examples/animals/animals';
import { Vehicle, Car } from './vehicle';
import { ExampleService } from './example.service';
import { Example } from './examples/example';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  selectedExample: Example;
  currentSubscription: Subscription;
  examples: Example[];
  output = "";

  constructor(private exampleService: ExampleService){}

  ngOnInit(): void {
    this.examples = this.exampleService.getExamples();
  }

  executeExample(): void{
    this.selectedExample.execute();
  }

  subscribeToOutput(): void{
    if(this.currentSubscription){
      this.currentSubscription.unsubscribe();
      this.output = "";
    }
    this.currentSubscription = this.selectedExample.getOutputSubject().subscribe((output: string) => {
      this.output += output;
      this.output += "\n";
    });
  }

}
