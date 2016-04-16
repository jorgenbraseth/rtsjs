import { intersects, containsPoint } from './Utils'
import { GRID_SIZE } from './constants/GameConstants'

export default class ViewPort {

  constructor(game, width=30, height=20,pos=[0,0]){
    this._width = width;
    this._height = height;
    this._pos = pos;
    this.game = game;
  }

  get pos(){
    return this._pos
  }

  get widthInGridUnits(){
    return this._width;
  }

  get heightInGridUnits(){
    return this._height;
  }

  get minXInGridUnits(){
    return this.pos[0];
  }
  get minYInGridUnits(){
    return this.pos[1];
  }

  set minXInGridUnits(newX){
    this.pos[0] = newX;
  }

  set minYInGridUnits(newY){
    this.pos[1] = newY;
  }

  get minXPx() {
    return this.minXInGridUnits*GRID_SIZE;
  }
  get minYPx() {
    return this.minYInGridUnits*GRID_SIZE;
  }

  get boxPx(){
    return {
      left: this.boxGridUnits.left*GRID_SIZE,
      right: this.boxGridUnits.right*GRID_SIZE,
      top: this.boxGridUnits.top*GRID_SIZE,
      bottom: this.boxGridUnits.bottom*GRID_SIZE
    }
  }

  get boxGridUnits(){
    return {
      left: this.minXInGridUnits,
      right: this.minXInGridUnits+this.widthInGridUnits,
      top: this.minYInGridUnits,
      bottom: this.minYInGridUnits+this.heightInGridUnits
    }
  }

  isRectVisible(rect) {
    const {x,y} = this.pos;
    const viewPortBoundingBox = {
      left: x*GRID_SIZE-GRID_SIZE,
      top: y*GRID_SIZE-GRID_SIZE,
      right: x*GRID_SIZE+(this.widthInGridUnits*GRID_SIZE)+GRID_SIZE,
      bottom: y*GRID_SIZE+(this.heightInGridUnits*GRID_SIZE)+GRID_SIZE
    };
    return intersects(rect, viewPortBoundingBox)
  }

  toWorldCoord(viewPortCoord) {
    return [viewPortCoord[0]+this.pos[0], viewPortCoord[1]+this.pos[1]];
  }

  toGridCoord(viewPortCoord) {
    return [Math.floor(viewPortCoord[0] / GRID_SIZE) + this.pos[0], Math.floor(viewPortCoord[1] / GRID_SIZE) + this.pos[1]];
  }

  toGridPos(x, y) {
    return [Math.floor(x / GRID_SIZE) + this.minXInGridUnits, Math.floor(y / GRID_SIZE) + this.minYInGridUnits];
  }

  get worldCoordPos(){
    return [this.pos[0]*GRID_SIZE,this.pos[1]*GRID_SIZE];
  }

  focusOnGridPos(pos){
    var halfHeight = this.heightInGridUnits/2;
    var halfWidth = this.widthInGridUnits/2;

    const newX = Math.min(Math.max(0,pos[0]*GRID_SIZE-halfWidth),this.game.worldSize[0]-this.widthInGridUnits);
    const newY = Math.min(Math.max(0,pos[1]*GRID_SIZE-halfHeight),this.game.worldSize[1]-this.heightInGridUnits);

    this._pos = [newX,newY];
  }
}
