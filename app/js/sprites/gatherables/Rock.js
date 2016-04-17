import { GRID_SIZE, LAYERS } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Sprite from './../Sprite'
import Rubble from './../decore/Rubble'

import Image from '../../../images/rock_sprite.png'

export default class Rock extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords,1,1);

    this.color = "rgba(100,100,100,0.5)";
    this.startingResources = 15;
    this.resourceAmount = this.startingResources;
    this.moveCost = 10000;
    this.resourceType = "stone";

    this.gatherHealth = 15;
    this.gatherProgress = 0;

    this.images = {
      1.0: [loadImage(Image), 0, 0, 42, 42, 0, 0, this.pixels.width, this.pixels.height],
      .66: [loadImage(Image), 42, 0, 42, 42, 0, 0, this.pixels.width, this.pixels.height],
      .33: [loadImage(Image), 84, 0, 42, 42, 0, 0, this.pixels.width, this.pixels.height],
      0.0: [loadImage(Image), 126, 0, 42, 42, 0, 0, this.pixels.width, this.pixels.height]
    };
    this.image = this.images[1.0];
  }

  gather(gatherAmount, gatherer){
    this.gatherProgress += gatherAmount;
    var gathered = 0;
    if(this.gatherProgress > this.gatherHealth){
      this.gatherProgress -= this.gatherHealth;
      gathered = 1;
    }
    this.resourceAmount -= gathered;

    gatherer.resources[this.resourceType] = gatherer.resources[this.resourceType] || 0;
    gatherer.resources[this.resourceType] += gathered;

    if(this.resourceAmount <= 0){
      this.deplete();
      gatherer.killed(this);
    }

    if(gathered > 0){
      var resourcePercentLeft = this.resourceAmount/this.startingResources;
      const currentLook = Object.keys(this.images).filter((k)=>{
        return resourcePercentLeft >= k}
      ).sort().reverse()[0];
      this.image = this.images[currentLook]
    }
  }

  deplete() {
    this.game.removeSprite(this);
    this.depleted = true;
    this.game.addSprite(LAYERS.LAYER_FLOOR, new Rubble(this.game, this.gridInfo.pos))
  }

  get details(){
    return {...super.details,
      output: {
        type: this.resourceType,
        amount: this.resourceAmount
      },
      progress: 1-this.gatherProgress/this.gatherHealth
    }
  }
}
