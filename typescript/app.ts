let isGoodForTheJob = (ship) => console.log( `${ship.model} is good for the job? ${ ship.cargoContainers >= 4 ? 'YES' : 'NO' }` );
let isSmugglerShip = (ship) => console.log( `${ship.model} is a smuggler's ship? ${ ship.hiddenContainers > 0 ? 'YES' : 'NO' }` );

import { MillenniunFalcon, XWing } from './starfighters';


let xWing : XWing = new XWing();
xWing.jumpIntoHyperSpace();
xWing.shootLasers();


let falcon : MillenniunFalcon = new MillenniunFalcon();
isGoodForTheJob(falcon);
isSmugglerShip(falcon);
falcon.jumpIntoHyperSpace();




import * as _ from 'lodash'
