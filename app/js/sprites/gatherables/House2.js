import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Producer from './ProductionBuilding'

import Image from '../../../images/buildings.png'

const drawHeight = (78/64)*GRID_SIZE;
const drawWidth = GRID_SIZE;

export default class House2 extends Producer {
  constructor(game, coords=[0,0]){
    super("gold", 5, 1000, game, coords,1,1);

    this.image = [
      loadImage(Image),
      272,115,64,78,
      (GRID_SIZE/2)-(drawWidth/2),
      GRID_SIZE-drawHeight,
      drawWidth,
      drawHeight
    ];

    this.cost = {
      stone: 10,
      food: 5
    };
  }

  get name(){
    return "Office";
  }
}
