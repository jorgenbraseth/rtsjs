import { GRID_SIZE } from '../../constants/GameConstants'

const padding = 0.07*GRID_SIZE;
const iconSize = GRID_SIZE-padding*2;


export default class QuickBar {
  constructor(game, position = [0,0]){
    this.game = game;
    this.position = position;
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

  getSlot(slotNum){

  }

  draw(screen){
    screen.translate(...this.position);

    screen.fillStyle = 'rgba(0,0,0,0.3)';
    screen.fillRect(0,0,GRID_SIZE*this.slots.length, GRID_SIZE);

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
