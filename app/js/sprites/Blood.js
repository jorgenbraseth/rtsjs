import { GRID_SIZE } from '../constants/GameConstants.js'
import { loadImage } from '../Utils'
import Sprite from './Sprite'

import Image from '../../images/blood.png'

export default class Blood extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);
    this.moveCost = 0;
    this.age = 0;

    this.image = loadImage(Image);
  }

  draw(screen){
    var imageAgeOffset = parseInt(this.age / (500/6));
    var x = imageAgeOffset*150;
      screen.drawImage(
      this.image,
      x,0,150,150,
      this.grid2draw(this.pos.x)-GRID_SIZE/2,this.grid2draw(this.pos.y)-GRID_SIZE/5,
      this.width,this.width
    )
  }

  

  tick(){
    this.age +=1;
    if(this.age >= 500){
      this.game.removeSprite(this);
    }
  }
}
