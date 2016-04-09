import Sprite from "../Sprite"
import {GRID_SIZE} from '../../constants/GameConstants.js'
import {loadImage} from '../../Utils'

export default class InfoWindow extends Sprite {
  constructor(unit, game) {
    super(game);
    this.alwaysDraw = true;
    this.game = game;
    this.unit = unit;

    this.width = 195;
    this.height = 95;
  }

  draw(screen) {
    var maxX = this.game.canvas.width;
    var maxY = this.game.canvas.height;

    var posX = maxX - 10 - this.width;
    var posY = 10;
    screen.translate(posX, posY);

    screen.fillStyle = "rgba(0,0,0,0.9)";
    screen.fillRect(0, 0, this.width, this.height);

    screen.fillStyle = "white";
    screen.textAlign = "left";

    var textline = 1;
    screen.fontSize = 12;
    screen.fillText(this.unit.constructor.name,10,(textline*12)+10);
    textline++;
    textline++;
    screen.fillText(Math.ceil(this.unit.resourceAmount),10,textline*12+10);

    screen.translate(-posX, -posY);
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
}
