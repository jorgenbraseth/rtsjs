import Sprite from '../Sprite'
import {GRID_SIZE} from '../../constants/GameConstants'
import {loadImage} from '../../Utils'

const padding = 0.07 * GRID_SIZE;
const iconSize = GRID_SIZE - padding * 2;

import ICON_WOOD from '../../../images/icon_wood.png'
import ICON_STONE from '../../../images/icon_stone.png'
import ICON_FOOD from '../../../images/icon_food2.png'
import ICON_COIN from '../../../images/icon_coin.png'


export default class QuickBar extends Sprite {
  constructor(game, position = [0, 0]) {
    super(game, position);
    this.game = game;
    this.position = position;
    this.alwaysDraw = true;

    this.icons = {};
    this.icons.wood = loadImage(ICON_WOOD);
    this.icons.stone = loadImage(ICON_STONE);
    this.icons.food = loadImage(ICON_FOOD);
    this.icons.gold = loadImage(ICON_COIN);

    this.slots = [
      [],[],[],[],[],[],[],[],[]
    ];
  }

  setSlot(slotNum, unitType) {
    this.slots[slotNum] = [new unitType(), unitType];
  }

  set width(w) {
  }

  set height(h) {
  }

  get width() {
    return GRID_SIZE * this.slots.length;
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

  getSlot(slotNum) {

  }


  click(x, y) {
    const localCoords = [x - this.boundingBox.left, y - this.boundingBox.top];
    const widthPerSlot = this.width / this.slots.length;
    const clickedSlotNum = Math.floor(localCoords[0] / widthPerSlot);

    var clickedSlot = this.slots[clickedSlotNum];
    if (clickedSlot[1]) {
      this.game.enablePlacementMode(clickedSlot[1].name);
    }
  }

  draw(screen) {
    screen.save();
    screen.translate(...this.position);

    screen.fillStyle = 'rgba(0,0,0,0.3)';
    screen.fillRect(0, 0, this.width, this.height);
    screen.fillStyle = 'rgba(0,0,0,0.6)';
    screen.fillRect(0, GRID_SIZE, this.width, 14);


    screen.save();
    for (var slotPos = 0; slotPos < this.slots.length; slotPos++) {
      this.drawSlot(screen, slotPos);
      screen.translate(GRID_SIZE, 0);
    }
    screen.restore();

    screen.translate(-this.position[0], -this.position[1]);
    screen.restore();
  }

  drawSlot(screen, slotPos) {
    screen.save();

    var slotInPos = this.slots[slotPos];

    if (slotInPos[0]) {

      //Image
      this.drawSlotImage(screen, slotInPos);

      //Number
      this.drawSlotNumber(screen, slotPos);

      //Cost
      screen.save();
      screen.translate(0,-20);
      const slotCost = slotInPos[0].cost;
      for(var resourceType in slotCost){
        screen.save();
        screen.fillRect(0,0,35,14);
        screen.drawImage(this.icons[resourceType],0,0,15,15);
        screen.translate(17,0);
        screen.fillStyle = "white";
        screen.textAlign = "left";
        screen.fillText(slotCost[resourceType],0,12)
        screen.restore();
        screen.translate(0,-17);
      }
      screen.restore();
    }


    screen.restore();
  }

  drawSlotImage(screen, slotInPos){
      screen.save();
      var slotImage = slotInPos[0].image;

      slotImage[5] = padding;
      slotImage[6] = padding;
      slotImage[7] = iconSize;
      slotImage[8] = iconSize;

      if (!this.game.canAfford(slotInPos[0].cost)) {
        screen.globalAlpha = 0.5;
      }
      screen.drawImage(...slotImage);
          screen.restore();
      }

  drawSlotNumber(screen, slotPos){
      screen.save();
      screen.translate(0, GRID_SIZE);
      screen.fillStyle = "white";
      const textWidth = screen.measureText("" + (slotPos + 1)).width;
      screen.fillText("" + (slotPos + 1), padding + (GRID_SIZE / 2) - (textWidth / 2), GRID_SIZE * 0.3);
      screen.restore();
      }

}
