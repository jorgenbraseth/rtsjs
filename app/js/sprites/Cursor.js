import CURSOR_PLAIN from '../../images/plainCursor.png';

import { GRID_SIZE } from '../constants/GameConstants'
import { loadImage } from '../Utils'

const hotspot = {x:3,y:3};

const cursors = {};

export default class StatusPanel {

  constructor(){
    cursors.DEFAULT = [loadImage(CURSOR_PLAIN), 0, 0, 24, 24, -hotspot.x, -hotspot.y, 24, 24];
    cursors.ATTACK = [loadImage(CURSOR_PLAIN), 0, 0, 24, 24, -hotspot.x, -hotspot.y, 24, 24];
    cursors.MOVE = [loadImage(CURSOR_PLAIN), 0, 0, 24, 24, -hotspot.x, -hotspot.y, 24, 24];

    this.currentLook = cursors.DEFAULT;
  }

  setPosition(x,y) {
    this.posX = x;
    this.posY = y;
  }

  setImage(img){
    if(img){
      this.currentLook = img;
    }
  }

  draw(screen){
    screen.translate(this.posX,this.posY);


    // if(this.mode !== 'PLACE'){
      screen.drawImage(...this.currentLook);
    // }

    screen.translate(-this.posX,-this.posY);
  }

  grid2draw(val){
    return val * GRID_SIZE + GRID_SIZE / 2;
  }

  setMode(mode, args){
    this.mode = mode;
    this.currentLook = cursors[this.mode] || cursors.DEFAULT;
  }
}
