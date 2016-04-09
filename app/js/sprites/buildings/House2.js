import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Sprite from './../Sprite'

import Image from '../../../images/buildings.png'

export default class House2 extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);

    this.startingResources = 15;
    this.resourceAmount = this.startingResources;
    this.moveCost = 0;

    this.width = GRID_SIZE;
    this.height = (73/64)*GRID_SIZE;

    this.cost = {
      wood: 5,
      stone: 10
    };


    this.image = [loadImage(Image),531,120,62,73,0,GRID_SIZE-this.height,this.width,this.height]
  }

  draw(screen){
    super.draw(screen);
  }
}
