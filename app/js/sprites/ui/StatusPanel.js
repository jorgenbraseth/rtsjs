import Sprite from "../Sprite"

import {GRID_SIZE} from '../../constants/GameConstants.js'
import {loadImage} from '../../Utils'

import ICON_WOOD from '../../../images/icon_wood.png'
import ICON_STONE from '../../../images/icon_stone.png'
import ICON_FOOD from '../../../images/icon_food.png'
import ICON_COIN from '../../../images/icon_coin.png'

export default class StatusPanel extends Sprite {
  constructor(unit, game) {
    super(game);

    this.game = game;
    this.unit = unit;
    this.iconWood = loadImage(ICON_WOOD);
    this.iconStone = loadImage(ICON_STONE);
    this.iconFood = loadImage(ICON_FOOD);
    this.iconCoin = loadImage(ICON_COIN);
  }

  draw(screen) {
    var maxX = this.game.canvas.width;
    var maxY = this.game.canvas.height;

    var posX = maxX - 200;
    var posY = maxY - 100;
    screen.translate(posX, posY);

    screen.fillStyle = "rgba(0,0,0,0.9)";
    screen.fillRect(0, 0, 195, 95);


    this.drawWood(screen);
    this.drawStone(screen);
    this.drawFood(screen);
    this.drawCoin(screen);

    screen.translate(-posX, -posY);
  }

  drawWood(screen) {
    screen.drawImage(this.iconWood, 0, 0, 27, 27, 10, 10, 27, 27);
    var amountOfWood = this.unit.resources.wood || 0;
    screen.fillStyle = "white";
    screen.font = "12px arial";
    screen.textAlign = "center";
    screen.fillText(amountOfWood, 24, 50);
  };

  drawStone(screen) {
    screen.drawImage(this.iconStone, 0, 0, 184, 184, 40, 10, 27, 27);
    var amountOfWood = this.unit.resources.stone || 0;
    screen.fillStyle = "white";
    screen.font = "12px arial";
    screen.textAlign = "center";
    screen.fillText(amountOfWood, 54, 50);
  };

  drawFood(screen) {
    screen.drawImage(this.iconFood, 0, 0, 39, 37, 73, 13, 18, 18);
    var amount = this.unit.resources.food || 0;
    screen.fillStyle = "white";
    screen.font = "12px arial";
    screen.textAlign = "center";
    screen.fillText(amount, 84, 50);
  };

  drawCoin(screen) {
    screen.drawImage(this.iconCoin, 0, 0, 29, 33, 103, 13, 17, 20);
    var amount = this.unit.resources.coin || 0;
    screen.fillStyle = "white";
    screen.font = "12px arial";
    screen.textAlign = "center";
    screen.fillText(amount, 114, 50);
  };


  grid2draw(val) {
    return val * GRID_SIZE + GRID_SIZE / 2;
  }


  select() {
    super.select();
    console.log(this.constructor.name + " selected");
  }
}
