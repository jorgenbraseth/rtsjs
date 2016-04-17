import { GRID_SIZE, LAYERS } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Resource from './Resource'
import Rubble from './../decore/Rubble'

import Image from '../../../images/rock_sprite.png'

export default class Rock extends Resource {
  constructor(game, coords=[0,0]){
    super(game, coords, "stone", 50, 10);

    this.color = "rgba(100,100,100,0.5)";

    this.images = {
      1.0: [loadImage(Image), 0, 0, 42, 42, 0, 0, this.pixels.width, this.pixels.height],
      .66: [loadImage(Image), 42, 0, 42, 42, 0, 0, this.pixels.width, this.pixels.height],
      .33: [loadImage(Image), 84, 0, 42, 42, 0, 0, this.pixels.width, this.pixels.height],
      0.0: [loadImage(Image), 126, 0, 42, 42, 0, 0, this.pixels.width, this.pixels.height]
    };
    this.image = this.images[1.0];
  }

  gather(gatherAmount, gatherer){
    super.gather(...arguments);

    var resourcePercentLeft = this.resourceAmount/this.startingResources;
    const currentLook = Object.keys(this.images).filter((k)=>{
      return resourcePercentLeft >= k}
    ).sort().reverse()[0];
    this.image = this.images[currentLook]
  }

  deplete() {
    super.deplete();
    this.game.addSprite(LAYERS.LAYER_FLOOR_DECORE, new Rubble(this.game, this.gridInfo.pos))
  }


}
