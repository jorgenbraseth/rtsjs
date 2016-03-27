import CURSOR_PLAIN from '../../images/plainCursor.png';

import { GRID_SIZE } from '../constants/GameConstants'
import { loadImage } from '../Utils'

const hotspot = {x:3,y:3};

const cursors = {};

export default class StatusPanel {

  constructor(){
    cursors.default = [loadImage(CURSOR_PLAIN), 0, 0, 24, 24, -hotspot.x, -hotspot.y, 24, 24];
    this.currentLook = cursors.default;
    this.placingSprite = undefined;
  }

  setPosition(x,y) {
    this.posX = x;
    this.posY = y;

    if(this.placingSprite){
      console.log([this.grid2draw(x), this.grid2draw(y)]);
    }
  }

  setImage(img){
    console.log("Setting new image");
    if(img){
      this.currentLook = img;
    }
  }

  draw(screen){
    screen.translate(this.posX,this.posY);

    screen.drawImage(...this.currentLook);

    screen.translate(-this.posX,-this.posY);
  }

  grid2draw(val){
    return val * GRID_SIZE + GRID_SIZE / 2;
  }

  setMode(mode, args){
    console.log("Cursor set for mode "+mode);
    if(mode==='PLACE' && args){
      this.setImage(args.image);
      // this.placingSprite = args;
    }else{
      this.currentLook = cursors.default;
    }
  }
}
