import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Sprite from './../Sprite'

import Image from '../../../images/buildings.png'

export default class House extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);

    this.startingResources = 0;
    this.resourceAmount = this.startingResources;
    this.maxResourceAmount = 10;
    this.moveCost = 0;

    this.width = GRID_SIZE;
    this.height = (73/64)*GRID_SIZE;

    this.cost = {
      wood: 5
    };

    this.produceFoodEveryNTick = 200;
    this.resourceType = "food";

    this.image = [loadImage(Image),463,118,64,73,0,GRID_SIZE-this.height,this.width,this.height]
  }

  draw(screen){
    super.draw(screen);

    if(!this.beingPlaced){
      this.drawInventoryIndicator(screen);
    }
  }

  drawInventoryIndicator(screen){
    const indicatorPos = [this.width*0.05, 0];

    screen.save();
    screen.translate(...indicatorPos);


    const indicatorWidth = this.width * 0.9;
    const indicatorHeight = 5;

    screen.fillStyle = 'rgba(0,0,0,0.3';
    screen.fillRect(0,0,indicatorWidth,indicatorHeight);
    screen.translate(1,1);
    screen.fillStyle = 'rgba(250,200,0,0.9)';

    const widthPerBox = ((indicatorWidth-1)-this.maxResourceAmount)/this.maxResourceAmount;
    for (var res = 0; res < this.resourceAmount; res++) {
      screen.fillRect((res*widthPerBox)+(res),0,widthPerBox,indicatorHeight-2);
    }

    screen.restore();

  }

  tick(){
    if(!this.beingPlaced){
      this.age++;

      if(this.resourceAmount < this.maxResourceAmount && this.age % this.produceFoodEveryNTick == 0){
        this.resourceAmount += 1;
      }
    }
  }

  gather(gatherAmount, gatherer){
    gatherer.resources[this.resourceType] = gatherer.resources[this.resourceType] || 0;
    gatherer.resources[this.resourceType] += this.resourceAmount;
    this.resourceAmount = 0;
    gatherer.targetOfAttack = undefined;
  }
}
