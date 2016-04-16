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
    return intersects(rect, this.boxPx)
  }

  toWorldCoord(viewPortCoord) {
    return [viewPortCoord[0]+this.pos[0], viewPortCoord[1]+this.pos[1]];
  }

  toGridCoord(viewPortCoord) {
    return [Math.floor(viewPortCoord[0] / GRID_SIZE + this.pos[0]), Math.floor(viewPortCoord[1] / GRID_SIZE + this.pos[1])];
  }

  toGridPos(x, y) {
    return this.toGridCoord([x, y]);
  }

  get worldCoordPos(){
    return [this.pos[0]*GRID_SIZE,this.pos[1]*GRID_SIZE];
  }

  focusOnGridPos(pos){
    const focusX = pos[0];
    const focusY = pos[1];
    var halfHeight = this.heightInGridUnits/2;
    var halfWidth = this.widthInGridUnits/2;

    const newX = Math.min(Math.max(0,focusX-halfWidth),this.game.worldSize[0]-this.widthInGridUnits);
    const newY = Math.min(Math.max(0,focusY-halfHeight),this.game.worldSize[1]-this.heightInGridUnits);

    this._pos = [newX,newY];
  }
}
