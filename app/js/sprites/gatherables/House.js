import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import ProductionBuilding from './ProductionBuilding'

import Image from '../../../images/buildings.png'

export default class House extends ProductionBuilding {
  constructor(game, coords=[0,0]){
    super("food", 10, 200, game, coords);

    this.moveCost = 0;
    this.width = GRID_SIZE;
    this.drawWidth = GRID_SIZE;

    this.drawHeight = (73/64)*GRID_SIZE;
    this.height = GRID_SIZE;
    this.cost = {
      wood: 5
    };

    this.image = [
      loadImage(Image),
      463,118,64,73,
      (GRID_SIZE/2)-(this.drawWidth/2),GRID_SIZE-this.drawHeight,this.drawWidth,this.drawHeight
    ];
  }
}
