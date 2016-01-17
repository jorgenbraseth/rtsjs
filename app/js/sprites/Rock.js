import { GRID_SIZE } from '../constants/GameConstants.js'
import Sprite from './Sprite'

import Image from '../../images/rock-tiles.png'

export default class Rock extends Sprite {
  constructor(x,y){
    super();
    this.moveCost = 1;
    this.pos.x = x;
    this.pos.y = y;
    this.width = GRID_SIZE;
    this.color = "black";

    this.image = document.createElement("img");
    this.image.setAttribute('src', Image);
  }

  draw(screen){

    //screen.drawImage(this.image,this.grid2draw(this.pos.x)-GRID_SIZE/2,this.grid2draw(this.pos.y)-GRID_SIZE/2,GRID_SIZE,GRID_SIZE)
    screen.drawImage(
      this.image,
      0,0,85,85,
      this.grid2draw(this.pos.x)-GRID_SIZE/2,this.grid2draw(this.pos.y)-GRID_SIZE/2,
      this.width,this.width
    )
  }

  grid2draw(val){
    return val * GRID_SIZE + GRID_SIZE / 2;
  }
}
