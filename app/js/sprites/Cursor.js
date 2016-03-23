import CURSOR_PLAIN from '../../images/plainCursor.png';

import { loadImage } from '../Utils'

const hotspot = {x:3,y:3};

const cursors = {};

export default class StatusPanel {

  constructor(){
    cursors.sword = loadImage(CURSOR_PLAIN);
  }

  setPosition(x,y) {
    this.posX = x-hotspot.x;
    this.posY = y-hotspot.y;
  }

  draw(screen){
    screen.translate(this.posX,this.posY);

    screen.drawImage(cursors.sword, 0,0,24,24,0,0, 24, 24);

    screen.translate(-this.posX,-this.posY);
  }
}
