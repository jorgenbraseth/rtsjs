import { ICONS } from '../../Utils'

import Sprite from './../Sprite'
import {LAYERS,GRID_SIZE} from '../../constants/GameConstants.js'

export default class Food extends Sprite {

  constructor(game, coords=[0,0]){
    super(game, coords, 20/GRID_SIZE,20/GRID_SIZE);
    this.color = "black";

    this.image = [ICONS.food,0,0,this.pixels.width,this.pixels.height];
  }

  get layer() {
    return LAYERS.LAYER_GROUND;
  }

  collide(collidedWith){

    if(collidedWith.name === "Player"){
      collidedWith.giveResource("food",1);
      this.game.removeSprite(this);
    }
  }
}
