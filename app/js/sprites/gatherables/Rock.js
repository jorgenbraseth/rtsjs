import { GRID_SIZE, LAYERS } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Sprite from './../Sprite'
import Rubble from './../decore/Rubble'

import Image from '../../../images/rock_sprite.png'

export default class Rock extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);

    this.startingResources = 15;
    this.resourceAmount = this.startingResources;
    this.moveCost = 10000;

    this.images = [
      [loadImage(Image),126,0,42,42,0,0,this.width,this.width],
      [loadImage(Image),84,0,42,42,0,0,this.width,this.width],
      [loadImage(Image),42,0,42,42,0,0,this.width,this.width],
      [loadImage(Image),0,0,42,42,0,0,this.width,this.width]
    ];
    this.image = this.images[3];
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

    var steps = Math.ceil(this.startingResources/this.images.length);
    const currentLook = Math.floor(this.resourceAmount / steps);
    this.image = this.images[currentLook]
  }

  deplete() {
    this.game.removeSprite(this);
    this.depleted = true;
    this.game.addSprite(LAYERS.LAYER_FLOOR, new Rubble(this.game, this.gridInfo.pos))
  }
}
