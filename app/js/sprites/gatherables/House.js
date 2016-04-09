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

    this.produceFoodEveryNTick = 50;
    this.resourceType = "food";

    this.image = [loadImage(Image),463,118,64,73,0,GRID_SIZE-this.height,this.width,this.height]
  }

  draw(screen){
    super.draw(screen);
  }

  tick(){
    if(!this.beingPlaced){
      this.age++;

      if(this.age % 20 == 0){
        this.resourceAmount += 1;
      }
    }
  }

  gather(gatherAmount, gatherer){
    gatherer.resources[this.resourceType] = gatherer.resources[this.resourceType] || 0;
    gatherer.resources[this.resourceType] += this.resourceAmount;
    this.resourceAmount = 0;
  }
}