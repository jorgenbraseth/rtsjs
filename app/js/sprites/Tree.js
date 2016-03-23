import { GRID_SIZE } from '../constants/GameConstants.js'
import Sprite from './Sprite'

import Image from '../../images/trees2.png'

const VARIANTS = [
  {x: 385, y:14, w:86, h:143},
  {x: 515, y:332, w:53, h:88},
  {x: 268, y:14, w:93, h:153},
  {x: 547, y:139, w:103, h:172},
  {x: 27, y:281, w:101, h:168},
  {x: 353, y:311, w:57, h:95},
  {x: 155, y:145, w:87, h:145}
];

export default class Tree extends Sprite {

  constructor(game, coords=[0,0]){
    super(game, coords);
    this.moveCost = 0;
    this.width = GRID_SIZE;
    this.color = "black";

    this.image = document.createElement("img");
    this.image.setAttribute('src', Image);

    this.variant = VARIANTS[parseInt(Math.random()*VARIANTS.length)];

  }

  draw(screen, viewport){
    screen.drawImage(
      this.image,
      this.variant.x,this.variant.y,this.variant.w,this.variant.h,
      this.grid2draw(this.pos.x)-GRID_SIZE/2,this.grid2draw(this.pos.y)-45,
      40 ,65
    )
  }

  grid2draw(val){
    return val * GRID_SIZE + GRID_SIZE / 2;
  }
}
