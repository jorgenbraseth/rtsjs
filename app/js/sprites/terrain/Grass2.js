import { GRID_SIZE } from '../../constants/GameConstants.js'
import Sprite from './../Sprite'

import Image from '../../../images/ground.png'
import { loadImage } from '../../Utils'
export default class Grass2 extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords, 1, 1);
    this.color = "cyan";
    this.image = [loadImage(Image),0,51,24,24,0,0,this.pixels.width,this.pixels.height];
  }
}
