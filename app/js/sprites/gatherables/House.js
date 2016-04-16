import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import ProductionBuilding from './ProductionBuilding'

import Image from '../../../images/buildings.png'

export default class House extends ProductionBuilding {
  constructor(game, coords=[0,0]){
    super("food", 10, 200, game, coords,GRID_SIZE,GRID_SIZE);

    this.moveCost = 0;
    this.cost = {
      wood: 5
    };

    const drawHeight = (73/64)*GRID_SIZE;
    const drawWidth = GRID_SIZE;

    this.image = [
      loadImage(Image),
      463,118,64,73,
      (GRID_SIZE/2)-(drawWidth/2),GRID_SIZE-drawHeight,drawWidth,drawHeight
    ];
  }
}
