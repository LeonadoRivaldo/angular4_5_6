import { Spacecraft, SmugglerShip } from './base-ships';

class StarFighter extends Spacecraft{
  constructor(
    model : string,
    propulsor : string,
    public laserCannos: string,
    public qtyLaserCannos : number,
    public launchers : string
  ){
    super( propulsor, model);
  }


  shoot( weapon : string ){
    console.log( `${this.model} is shooting ${this[weapon]}` );
  }

  shootLasers(){
    this.shoot('laserCannos');
  }

}


//milleniun falcon
class MillenniunFalcon extends StarFighter implements SmugglerShip{

  cargoContainers : number;
  hiddenContainers : number;

  constructor(){
    super('Millenniun Falcon' , 'Isu-Sim SSP05 hyperdrive', "CEC AG-2G quad laser cannons", 2 , "Arakyd ST2 concussion missile tubes");
    this.cargoContainers = 4;
    this.hiddenContainers = 4;
  }

  private tryJumpHyperSpace():boolean{
    let chanceTojump = Math.random();
    if(chanceTojump >= 0.5){
      super.jumpIntoHyperSpace();
      return true;
    }else{
      console.log('Failed!');
      return false;
    }
  }

  jumpIntoHyperSpace(){
    let falconJumped = false
    let timesTried = 0;
    do{
      falconJumped = this.tryJumpHyperSpace();
      timesTried++;
      if( timesTried > 100 ){
        console.log("Repeair falcon hiperDrive");
        break;
      }
    }while(!falconJumped);
  }


}



//X-wing fighter
class XWing extends StarFighter {

  constructor(){
    super("X-wing", "hyperdrive", "Proton cannons", 4, "Torpedos");
  }

}


export { MillenniunFalcon, XWing };
