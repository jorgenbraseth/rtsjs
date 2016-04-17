import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'
import Sprite from './../Sprite'

import Image from '../../../images/blood.png'

export default class Blood extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);
    this.image = loadImage(Image);
  }

  draw(screen){
    var imageAgeOffset = parseInt(this.age / (500/6));
    var x = imageAgeOffset*150;
    screen.drawImage(
      this.image,
      x,0,150,150,
      0,0,
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
