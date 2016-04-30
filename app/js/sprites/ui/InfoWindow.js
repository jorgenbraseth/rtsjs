import Sprite from "../Sprite"
import {GRID_SIZE} from '../../constants/GameConstants.js'
import {loadImage, ICONS} from '../../Utils'

export default class InfoWindow extends Sprite {
  constructor(unit, game) {
    super(game, undefined, 195/GRID_SIZE, 95/GRID_SIZE);
    this.unit = unit;

    var maxY = this.game.canvas.height;
    this.x = (this.game.canvas.width/2-this.pixels.width/2)/GRID_SIZE;
    this.y = 10/GRID_SIZE;
  }

  draw(screen) {
    if (this._sprite !== undefined) {
      screen.save();
      screen.fillStyle = "rgba(0,0,0,0.5)";
      screen.fillRect(0, 0, this.pixels.width, this.pixels.height);
      screen.translate(5,5);
      screen.fillStyle = "rgba(250,250,0,0.1)";
      screen.fillRect(0, 0, this.pixels.width-10, this.pixels.height-10);
      screen.strokeStyle = "rgba(250,250,0,0.9)";
      screen.strokeRect(0, 0, this.pixels.width-10, this.pixels.height-10);

      screen.fillStyle = "white";
      screen.textAlign = "left";

      screen.font = "14px sans-serif";
      screen.translate(10,0);
      screen.fillText(this.info.name, 0, 14+5);
      screen.font = "12px sans-serif";
      screen.translate(0,14+5);

      if(this.info.input || this.info.progress || this.info.output){
        screen.translate(0,12);
        screen.save();

        const input = this.info.input;
        if(input){
          screen.fillStyle = "rgba(0,0,0,0.5)";
          input.forEach((inp) => {
            screen.save();
            screen.drawImage(ICONS[inp.type],2,2,16,16);
            screen.fillRect(0,0,20,20);
            screen.translate(0,15);
            screen.fillStyle = "white";
            screen.fillText(inp.amount+"/"+inp.amountNeeded,1,12+5);

            screen.restore();
            screen.translate(25,0)
          });
        }

        if(this.info.progress !== undefined){
          screen.fillStyle = "white";
          screen.fillRect(5,7,this.info.progress*25,8);
          screen.translate(35,0);
        }
        if(this.info.output){
          screen.drawImage(ICONS[this.info.output.type],2,2,20,20);
          screen.fillText(this.info.output.amount, 24,12+5);
        }

        screen.restore();
      }


      if(this.info.inventory){
        screen.translate(0,12);
      }
      // screen.fillText(Math.ceil(this.unit.resourceAmount),10,textline*12+10);
      screen.restore();
    }
  }

  get boundingBox() {
    return {
      left: this.pos.x,
      right: this.pos.x + this.width,
      top: this.pos.y,
      bottom: this.pos.y + this.height
    }
  }

  click(x,y){
    console.log("Clicked info windo!");

  }
  get info(){
    return this._sprite ? this._sprite.details : undefined;
  }

  set sprite(info){
    this._sprite = info;
  }
}
