import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Sprite from './../Sprite'

import Image from '../../../images/buildings.png'

export default class House extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);

    this.startingResources = 15;
    this.resourceAmount = this.startingResources;
    this.moveCost = 0;

    this.width = GRID_SIZE;
    this.height = (73/64)*GRID_SIZE;

    this.cost = {
      wood: 5
    };


    this.image = [loadImage(Image),463,118,64,73,0,GRID_SIZE-this.height,this.width,this.height]
  }

  draw(screen){
    super.draw(screen);
  }
  select(){
    super.select();
    console.log(this.constructor.name + " selected");
  }
}
