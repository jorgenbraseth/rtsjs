import { ICONS } from '../../Utils'

import Sprite from './../Sprite'
import {LAYERS,GRID_SIZE} from '../../constants/GameConstants.js'

export default class Gold extends Sprite {

  constructor(game, coords=[0,0]){
    super(game, coords, 16/GRID_SIZE,16/GRID_SIZE);
    this.color = "black";

    this.image = [ICONS.gold,0,0,this.pixels.width,this.pixels.height];
  }

  get layer() {
    return LAYERS.LAYER_GROUND;
  }

  collide(collidedWith){

    if(collidedWith.name === "Player"){
      collidedWith.giveResource("gold",1);
      this.game.removeSprite(this);
    }
  }
}
