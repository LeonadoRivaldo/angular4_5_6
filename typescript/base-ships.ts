class Spacecraft{

  constructor(public propulsor:string, public model:string ){}

  jumpIntoHyperSpace(){
    console.log(`${this.model} is entering in hyperspace with ${this.propulsor}`);
  }

}

interface ContainerShip{
  cargoContainers : number;
}

interface SmugglerShip extends ContainerShip {
  hiddenContainers : number;
}


export { Spacecraft, ContainerShip, SmugglerShip };
