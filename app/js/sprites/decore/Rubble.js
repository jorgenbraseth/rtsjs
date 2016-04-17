import { loadImage } from '../../Utils'

import Sprite from './../Sprite'

import Image from '../../../images/rubble.png'

export default class Rubble extends Sprite {

  constructor(game, coords=[0,0]){
    super(game, coords);
    this.moveCost = 0;
    this.color = "black";
    this.image = loadImage(Image);
  }

  draw(screen, viewport){
    screen.drawImage(
      this.image,
      0,0
    )
  }

}
