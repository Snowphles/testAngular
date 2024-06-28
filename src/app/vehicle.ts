export interface Vehicle{

  wheels: number;
  passengers: number;
  maxCapacity: number;
  distanceTraveled: number;

  enterVehicle(numberOfPassengers: number);
  exitVehicle(numberOfPassengers: number);
  transport(distance: number);

}

export class Car implements Vehicle{

  readonly wheels = 4;
  passengers: number;
  maxCapacity: number;
  distanceTraveled: number;

  constructor(maxCapacity, passengers, distanceTraveled){
    this.maxCapacity = maxCapacity;
    this.passengers = Math.min(maxCapacity, passengers);
    this.distanceTraveled = distanceTraveled;
  }

  enterVehicle(numberOfPassengers: number) {
    //this.passengers = numberOfPassengers > this.maxCapacity - this.passengers ? this.maxCapacity : numberOfPassengers + this.passengers;
    this.passengers = Math.min(this.maxCapacity, numberOfPassengers+this.passengers);
  }

  exitVehicle(numberOfPassengers: number) {
    this.passengers = Math.max(this.passengers-numberOfPassengers, 0);
  }

  transport(distance: number){
    this.distanceTraveled += distance;
  }

}