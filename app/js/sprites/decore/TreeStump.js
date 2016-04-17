import { GRID_SIZE } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'

import Sprite from './../Sprite'

import Image from '../../../images/tree_stump.png'

export default class TreeStump extends Sprite {

  constructor(game, coords=[0,0]){
    super(game, coords, 1, 1);
    this.color = "black";
    this.image = loadImage(Image);

  }

  draw(screen, viewport){
    screen.drawImage(
      this.image,
      0,0,98,78,
      GRID_SIZE/2-7,GRID_SIZE/2,
      12 ,12
    )
  }

}
