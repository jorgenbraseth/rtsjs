import { GRID_SIZE } from '../../constants/GameConstants.js'
import Sprite from './../Sprite'

import Image from '../../../images/grass.jpg'
import { loadImage } from '../../Utils'
export default class Grass extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords);
    this.width = GRID_SIZE;
    this.color = "black";

    this.image = [loadImage(Image),0,0,this.width,this.width];
  }

}
