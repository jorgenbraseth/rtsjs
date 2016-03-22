import { GRID_SIZE } from '../constants/GameConstants.js'
import Sprite from './Sprite'

import Image from '../../images/trees2.png'

export default class Rock extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);
    this.moveCost = 0;
    this.width = GRID_SIZE;
    this.color = "black";

    this.image = document.createElement("img");
    this.image.setAttribute('src', Image);
  }

  draw(screen){
    screen.drawImage(
      this.image,
      385,14,86,143,
      this.grid2draw(this.pos.x)-GRID_SIZE/2,this.grid2draw(this.pos.y)-45,
      40 ,65
    )
  }

  grid2draw(val){
    return val * GRID_SIZE + GRID_SIZE / 2;
  }
}
