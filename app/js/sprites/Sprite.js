import {GRID_SIZE} from '../constants/GameConstants.js'
import {intersects} from '../Utils'

export default class Sprite {

  constructor(game, coords = [0, 0], width=GRID_SIZE, height=GRID_SIZE) {
    this.game = game;

    this._x = coords[0];
    this._y = coords[1];

    this.beingPlaced = false;

    this.color = "red";
    this.age = 0;

    this.width = width;
    this.height = height;
    this.selected = false;
    this.alwaysDraw = false;

    this.speed = 0.2 + Math.random();

    this.dx = 1;
    this.dy = 1;

    this.moveCost = 0;

    this.pos = {
      x: coords[0],
      y: coords[1],
      centerPixelX: function () {
        return this.grid2draw(this.x) + this.width / 2;
      },
      centerPixelY: function () {
        return this.grid2draw(this.x) + this.width / 2;
      }
    };
  }

  get drawWidth(){
    if(this.image && this.image.length ==8){
      return this.image[7];
    }else if (this.image && this.image.length == 4) {
      return this.image[3];
    }else{
      return this._width;
    }
  }

  get drawHeight(){
    if(this.image && this.image.length ==8){
      return this.image[6];
    }else if (this.image && this.image.length == 4) {
      return this.image[2];
    }else{
      return this._height;
    }
  }

  get physical() {
    const coords = [this._x, this._y];
    return {
      top: this._y,
      bottom: this._y+this._height,
      left: this._x,
      right: this._x+this._width,
      width: this._width,
      height: this._height,
      center: {
        x: this._x + this.width/2,
        y: this._y + this.width/2
      }
    }
  }

  get gridInfo() {
    const coords = this.gridPos;
    return {
      pos: coords,
      width: 1,
      height: 1,
      boundingBox: {
        top: coords[1],
        left: coords[0],
        bottom: coords[1] + 1,
        right: coords[0] + 1
      }
    }
  }

  get drawInfo() {
    const coords = [this.pos.x * GRID_SIZE, this.pos.y * GRID_SIZE];
    return {
      pos: coords,
      width: this.width,
      height: this.height,
      boundingBox: {
        top: coords[1],
        left: coords[0],
        bottom: coords[1] + this.width,
        right: coords[0] + this.height
      },
      centerPixelX: function () {
        return coords[0] + this.width / 2;
      },
      centerPixelY: function () {
        return coords[1] + this.height / 2;
      }
    }
  }

  get gridPos() {
    return [this.pos.x, this.pos.y]
  }

  select() {
    this.selected = true;
  }

  unselect() {
    this.selected = false;
  }

  tick() {

  }

  drawSprite(screen) {
    screen.save();
    screen.fillStyle = "rgba(250,250,250,0.4)";
    screen.translate(this.pos.x * GRID_SIZE, this.pos.y * GRID_SIZE);
    screen.fillRect(0, 0, this.width, this.height);
    screen.restore();

    screen.save();
    screen.translate(...this.drawInfo.pos);

    if (this.beingPlaced) {
      screen.globalAlpha = 0.5;
      this.drawGridCell(screen);
    }

    if (this.selected) {
      screen.strokeSize = 1;
      screen.strokeStyle = 'rgba(250,250,0,0.8) ';
      screen.strokeRect(0, 0, this.width, this.height);
    }

    this.draw(screen);
    screen.globalAlpha = 1;
    screen.restore();
  }

  get boundingBox() {
    const drawCoords = [this.pos.x * GRID_SIZE, this.pos.y * GRID_SIZE];
    return {
      left: drawCoords[0],
      right: drawCoords[0] + this.width,
      top: drawCoords[1],
      bottom: drawCoords[1] + this.height
    }
  }

  get isPlaceable() {
    var positionFree = this.game.positionFree([this.pos.x, this.pos.y], true);
    var affordable = this.game.canAfford(this.cost);
    var isInRange = this.game.isWithinBuildRange([this.pos.x, this.pos.y]);
    var collidesWithPlayer = intersects(this.game.player.boundingBox, this.boundingBox);
    return positionFree && affordable && isInRange && !collidesWithPlayer;
  }

  click() {
    this.game.selectSprite(this);
  }

  draw(screen) {
    if (this.image) {
      screen.drawImage(...this.image);
    } else {
      screen.fillStyle = this.color;

      var centerX = this.drawWidth / 2;
      var centerY = this.drawHeight / 2;
      screen.fillRect(centerX - this.width / 2, centerY - this.width / 2, this.width, this.width);
    }
  }

  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  drawGridCell(screen) {
    screen.fillStyle = this.isPlaceable ? "rgba(0,255,0,0.9" : "red";
    screen.fillRect(0, 0, GRID_SIZE, GRID_SIZE);
  }
}
