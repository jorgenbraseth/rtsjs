import {GRID_SIZE} from '../constants/GameConstants.js'
import {intersects} from '../Utils'

export default class Sprite {

  constructor(game, coords = [0, 0]) {
    this.game = game;
    this.pos = {
      x: coords[0],
      y: coords[1],
      centerPixelX: function () {
        return this.grid2draw(this.x) + GRID_SIZE / 2;
      },
      centerPixelY: function () {
        return this.grid2draw(this.x) + GRID_SIZE / 2;
      }
    };


    this.beingPlaced = false;

    this.color = "red";
    this.age = 0;

    this.width = GRID_SIZE;
    this.height = GRID_SIZE;
    this.selected = false;
    this.alwaysDraw = false;

    this.speed = 0.2 + Math.random();

    this.dx = 1;
    this.dy = 1;

    this.moveQueue = [];

    this.moveCost = 0;
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
    const coords = this.drawCoords;
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

  get drawCoords() {
    return [this.grid2draw(this.pos.x), this.grid2draw(this.pos.y)];
  }

  drawSprite(screen, viewPort) {
    if (viewPort === undefined || viewPort.inView(this.gridInfo.pos)) {

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
  }

  get boundingBox() {
    return {
      left: this.drawCoords[0],
      right: this.drawCoords[0] + this.width,
      top: this.drawCoords[1],
      bottom: this.drawCoords[1] + this.height
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

      var centerX = GRID_SIZE / 2;
      var centerY = GRID_SIZE / 2;
      screen.fillRect(centerX - this.width / 2, centerY - this.width / 2, this.width, this.width);
    }
  }

  grid2draw(val) {
    return val * GRID_SIZE;
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
