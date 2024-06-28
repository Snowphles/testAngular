export abstract class Animal{
  
  birthDate: Date;
  species: string;
  amphibious: boolean;

  constructor(species: string, amphibious: boolean, birthDate: Date){
    this.species = species;
    this.amphibious = amphibious;
    this.birthDate = birthDate;
  }

  getAgeInYears(): number{
    const today = new Date();
    return today.getFullYear()-this.birthDate.getFullYear();
  }

}

export class Dog extends Animal{
  
  name: string;
  breed: string;
  color: string;
  weight: number;

  constructor(name: string, breed: string, color: string, weight: number, birthDate: Date){
    super("Canis Familiaris", false, birthDate);
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.weight = weight;
  }
}

export class Crow extends Animal{

    name: string;
    weight: number;
    wingspan: number;

    constructor(name: string, weight: number, wingspan: number, birthDate: Date){
        super("Corvus", false, birthDate);
        this.name = name;
        this.weight = weight;
        this.wingspan = wingspan;
    }
}