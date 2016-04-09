import Sprite from '../Sprite'
import { GRID_SIZE } from '../../constants/GameConstants'

const padding = 0.07*GRID_SIZE;
const iconSize = GRID_SIZE-padding*2;


export default class QuickBar extends Sprite{
  constructor(game, position = [0,0]){
    super(game,position);
    this.game = game;
    this.position = position;
    this.alwaysDraw = true;

    this.slots = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
  }

  setSlot(slotNum, unitType){
    this.slots[slotNum] = [new unitType(), unitType];
  }

  set width(w){}
  set height(h){}
  get width() {
    return GRID_SIZE*this.slots.length;
  }

  get boundingBox() {
    return {
      left: this.pos.x,
      right: this.pos.x + this.width,
      top: this.pos.y,
      bottom: this.pos.y + this.height
    }
  }

  get height() {
    return GRID_SIZE;
  }

  getSlot(slotNum){

  }


  click(x,y){
    const localCoords = [x-this.boundingBox.left,y-this.boundingBox.top];
    const widthPerSlot = this.width / this.slots.length;
    const clickedSlotNum = Math.floor(localCoords[0]/widthPerSlot);

    var clickedSlot = this.slots[clickedSlotNum];
    if(clickedSlot[1]){
      this.game.enablePlacementMode(clickedSlot[1].name);
    }
  }

  draw(screen){
    screen.translate(...this.position);

    screen.fillStyle = 'rgba(0,0,0,0.3)';
    screen.fillRect(0,0,this.width, this.height);

    for (var slotPos = 0; slotPos < this.slots.length; slotPos++) {
      screen.translate(slotPos*GRID_SIZE,0);

      var slotInPos = this.slots[slotPos];

      if(slotInPos[0]){
        var slotImage = slotInPos[0].image;

        slotImage[5] = padding;
        slotImage[6] = padding;
        slotImage[7] = iconSize;
        slotImage[8] = iconSize;

        if(!this.game.canAfford(slotInPos[0].cost)){
          screen.globalAlpha = 0.5;
        }
        screen.drawImage(...slotImage);
        screen.globalAlpha = 1;
      }

      screen.translate(0,GRID_SIZE);
      screen.fillStyle = 'rgba(0,0,0,0.6)';
      screen.fillRect(0,0,GRID_SIZE,14);

      screen.fillStyle = "white";
      const textWidth = screen.measureText(""+(slotPos+1)).width;
      screen.fillText(""+(slotPos+1),padding+(GRID_SIZE/2)-(textWidth/2),GRID_SIZE*0.3);

      screen.translate(0,-GRID_SIZE);
      screen.translate(-slotPos*GRID_SIZE,0);
    }

    screen.translate(-this.position[0],-this.position[1]);
  }

}
