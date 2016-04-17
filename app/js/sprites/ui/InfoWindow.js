import Sprite from "../Sprite"
import {GRID_SIZE} from '../../constants/GameConstants.js'
import {loadImage} from '../../Utils'

export default class InfoWindow extends Sprite {
  constructor(unit, game) {
    super(game, undefined, 195/GRID_SIZE, 95/GRID_SIZE);
    this.unit = unit;

    var maxY = this.game.canvas.height;
    this._x = 10/GRID_SIZE;
    this._y = (maxY-10-this.pixels.height)/GRID_SIZE;
  }

  draw(screen) {
    if (this._info !== undefined) {
      screen.fillStyle = "rgba(250,250,0,0.1)";
      screen.fillRect(0, 0, this.pixels.width, this.pixels.height);
      screen.strokeStyle = "rgba(250,250,0,0.9)";
      screen.strokeRect(0, 0, this.pixels.width, this.pixels.height);

      screen.fillStyle = "white";
      screen.textAlign = "left";

      var textline = 1;
      screen.fontSize = 18;
      screen.fillText(this._info.name, 10, (textline * 12) + 10);
      textline++;
      textline++;
      // screen.fillText(Math.ceil(this.unit.resourceAmount),10,textline*12+10);
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

  set info(info){
    console.log(info);
    this._info = info;
  }
}
