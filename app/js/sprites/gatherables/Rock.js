import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Sprite from './../Sprite'

import Image from '../../../images/rock-tiles.png'

export default class Rock extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);

    this.startingResources = 15;
    this.resourceAmount = this.startingResources;
    this.moveCost = 10000;

    this.image = [loadImage(Image),0,0,85,85,0,0,this.width,this.width]
  }

  select(){
    super.select();
    console.log(this.constructor.name + " selected");
  }


  gather(gatherAmount, gatherer){
    var amountBeforeGather = parseInt(this.resourceAmount);
    this.resourceAmount -= gatherAmount/3;

    var amountAfterGather = parseInt(this.resourceAmount);
    gatherer.resources.stone = gatherer.resources.stone || 0;
    gatherer.resources.stone += (amountBeforeGather-amountAfterGather);

    if(this.resourceAmount <= 0){
      this.deplete();
      gatherer.killed(this);
    }
  }

  deplete() {
    this.game.removeSprite(this);
    this.depleted = true;
  }
}
