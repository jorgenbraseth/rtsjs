import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Producer from './ProductionBuilding'

import Image from '../../../images/buildings.png'

export default class House2 extends Producer {
  constructor(game, coords=[0,0]){
    super("gold", 5, 1000, game, coords);
    this.moveCost = 0;

    this.width = GRID_SIZE;
    this.drawWidth = GRID_SIZE;

    this.drawHeight = (73/64)*GRID_SIZE;
    this.height = GRID_SIZE;
    this.image = [loadImage(Image),531,120,62,73,(GRID_SIZE/2)-(this.drawWidth/2),GRID_SIZE-this.drawHeight,this.drawWidth,this.drawHeight];

    this.cost = {
      stone: 10,
      food: 5
    };
  }
}
