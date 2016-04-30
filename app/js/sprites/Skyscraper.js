import { GRID_SIZE } from '../constants/GameConstants.js'
import { loadImage } from '../Utils'
import Sprite from './Sprite'

import Image from '../../images/skyscraper.png'

export default class Skyscraper extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);

    this.cost = {
      stone: 500, food: 1000, gold: 1000
    };

    const drawHeight = (255/88)*GRID_SIZE;
    const drawWidth = GRID_SIZE;

    this.image = [
      loadImage(Image),
      (GRID_SIZE/2)-(drawWidth/2),GRID_SIZE-drawHeight,drawWidth,drawHeight
    ];
  }

  get name(){
      return "Skyscraper";
  }
}
