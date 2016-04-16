import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Producer from './ProductionBuilding'

import Image from '../../../images/buildings.png'

const drawHeight = (73/64)*GRID_SIZE;
const drawWidth = GRID_SIZE;

export default class House2 extends Producer {
  constructor(game, coords=[0,0]){
    super("gold", 5, 1000, game, coords,GRID_SIZE,GRID_SIZE);
    this.moveCost = 0;


    this.image = [
      loadImage(Image),
      531,120,62,73,
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
}
