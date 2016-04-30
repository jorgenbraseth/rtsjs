import {GRID_SIZE,LAYERS} from '../constants/GameConstants.js'
import {intersects} from '../Utils'

export default class Sprite {

  constructor(game, coords = [0, 0], width=1, height=1) {
    this.game = game;

    this.x = coords[0];
    this.y = coords[1];
    this._width = width;
    this._height = height;

    this.beingPlaced = false;

    this.color = "red";
    this.age = 0;

    this.selected = false;
    this.alwaysDraw = false;

    this.speed = 0.2 + Math.random();

    this.dx = 1;
    this.dy = 1;

    this.moveCost = 0;

  }

  get pos(){
    return {
      x: this.x,
      y: this.y
    };
  }
  get width(){
    return this._width;
  }

  get height(){
    return this._height;
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

  invalidatePixels(){
    this._pixelsValid = false;
  }

  calculatePixels(){
    this._pixels = {
      pos: this.grid.pos.map((p) => {return Math.round(p*GRID_SIZE)}),
      width: Math.round(this.grid.width * GRID_SIZE),
      height: Math.round(this.grid.height * GRID_SIZE),
      center: this.grid.center.map((p) => {return Math.round(p*GRID_SIZE)}),
      boundingBox: {
        top: Math.round(this.grid.boundingBox.top * GRID_SIZE),
        bottom: Math.round(this.grid.boundingBox.bottom * GRID_SIZE),
        left: Math.round(this.grid.boundingBox.left * GRID_SIZE),
        right: Math.round(this.grid.boundingBox.right * GRID_SIZE)
      }
    };
    this._pixelsValid = true;
  }

  get pixels(){
    if(!this._pixelsValid){
      this.calculatePixels();
    }
    return this._pixels;
  }

  get grid(){
    return {
      pos: [this.x,this.y],
      width: this._width,
      height: this._height,
      center: [this.x+this._width/2,this.y+this._height/2],
      boundingBox: {
        top: this.y,
        bottom: this.y+this._height,
        left: this.x,
        right: this.x+this._width
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
    // this.drawPhysicalSize(screen);

    screen.save();
    screen.translate(...this.drawInfo.pos);

    if (this.beingPlaced) {
      screen.globalAlpha = 0.5;
      this.drawGridCell(screen);
    }

    if (this.selected) {
      screen.strokeSize = 1;
      screen.strokeStyle = 'rgba(250,250,0,0.8) ';
      screen.strokeRect(0, 0, this.pixels.width, this.pixels.height);
    }

    this.draw(screen);
    screen.globalAlpha = 1;
    screen.restore();
  }

  drawPhysicalSize(screen){
    screen.save();
    screen.fillStyle = this.color;
    screen.translate(this.pixels.boundingBox.left, this.pixels.boundingBox.top );
    screen.fillRect(0, 0, this.pixels.width, this.pixels.height);
    screen.restore();
  }

  get boundingBox() {
    return this.pixels.boundingBox;
  }

  get isPlaceable() {
    var positionFree = this.game.positionFree([this.pos.x, this.pos.y], true);
    var affordable = this.game.canAfford(this.cost);
    var isInRange = this.game.isWithinBuildRange([this.pos.x, this.pos.y]);
    var collidesWithPlayer = intersects(this.game.player.boundingBox, this.pixels.boundingBox);
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
    this.x = x;
    this.y = y;
    this.invalidatePixels();
  }

  drawGridCell(screen) {
    screen.fillStyle = this.isPlaceable ? "rgba(0,255,0,0.9" : "red";
    screen.fillRect(0, 0, GRID_SIZE, GRID_SIZE);
  }

  get name(){
    return this.constructor.name
  }

  get details(){
    return {
      name: this.name,
      input: undefined,
      output: undefined,
      progress: undefined,
      inventory: undefined
    }
  }

  get layer(){
    return LAYERS.LAYER_GROUND;
  }

  set y(y){
    this._y = y;
    this.invalidatePixels();
  }

  get y(){
    return this._y;
  }

  set x(x){
    this._x = x;
    this.invalidatePixels();
  }

  get x(){
    return this._x;
  }

  giveResource(type, amountGiven){
    this.resources = this.resources || {};
    this.resources[type] = this.resources[type] || 0;
    this.resources[type] += amountGiven;
  }

  moveVertically(dy){
    this.y += dy;

    var collidingSprite = this.game.findCollision(this);
    if(collidingSprite!==undefined){
      if(collidingSprite.collide !== undefined){
        collidingSprite.collide(this);
      }
      if(this.collide !== undefined){
        this.collide(collidingSprite);
      }
      
      if(dy<0){
        const stepBackInGridUnits = collidingSprite.pixels.boundingBox.bottom-this.pixels.boundingBox.top;
        this.y += stepBackInGridUnits/GRID_SIZE;
      }else if(dy>0){
        const stepBackInGridUnits = this.pixels.boundingBox.bottom-collidingSprite.pixels.boundingBox.top;
        this.y -= stepBackInGridUnits/GRID_SIZE;
      }
    }

    if(this.y <0){
      this.y = 0;
    }else if(this.grid.boundingBox.bottom > this.game.worldSize[1]){
      this.y = this.game.worldSize[1]-this.grid.height;
    }
  }

  moveHorizontally(dx){
    this.x += dx;
    this.invalidatePixels();

    var collidingSprite = this.game.findCollision(this);
    if(collidingSprite!==undefined){
      if(collidingSprite.collide !== undefined){
        collidingSprite.collide(this);
      }
      if(this.collide !== undefined){
        this.collide(collidingSprite);
      }

      if (dx < 0) {
        const stepBackInGridUnits = collidingSprite.boundingBox.right - this.pixels.boundingBox.left;
        this.x += stepBackInGridUnits / GRID_SIZE;
        this.invalidatePixels();
      } else if (dx > 0) {
        const stepBackInGridUnits = this.boundingBox.right - collidingSprite.pixels.boundingBox.left;
        this.x -= stepBackInGridUnits / GRID_SIZE;
        this.invalidatePixels();
      }
    }
    if(this.x <0){
      this.x = 0;
      this.invalidatePixels();
    }else if(this.grid.boundingBox.right > this.game.worldSize[0]){
      this.x = this.game.worldSize[0]-this.grid.width;
      this.invalidatePixels();
    }
  }
}
