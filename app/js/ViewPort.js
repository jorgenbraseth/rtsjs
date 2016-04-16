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

  get width(){
    return this._width;
  }

  get height(){
    return this._height;
  }
  
  get minX(){
    return this.pos[0];
  }
  get minY(){
    return this.pos[1];
  }
  
  set minX(newX){
    this.pos[0] = newX;
  }

  set minY(newY){
    this.pos[1] = newY;
  }

  isRectVisible(rect) {
    const {x,y} = this.pos;
    const viewPortBoundingBox = {
      left: x*GRID_SIZE-GRID_SIZE,
      top: y*GRID_SIZE-GRID_SIZE,
      right: x*GRID_SIZE+(this.width*GRID_SIZE)+GRID_SIZE,
      bottom: y*GRID_SIZE+(this.height*GRID_SIZE)+GRID_SIZE
    };
    return intersects(rect, viewPortBoundingBox)
  }

  toWorldCoord(viewPortCoord) {
    return [viewPortCoord[0]+this.pos[0], viewPortCoord[1]+this.pos[1]];
  }

  toGridCoord(viewPortCoord) {
    return [Math.floor(viewPortCoord[0] / GRID_SIZE) + this.pos[0], Math.floor(viewPortCoord[1] / GRID_SIZE) + this.pos[1]];
  }

  get worldCoordPos(){
    return [this.pos[0]*GRID_SIZE,this.pos[1]*GRID_SIZE];
  }

  focusOnGridPos(pos){
    var halfHeight = this.height/2;
    var halfWidth = this.width/2;

    const newX = Math.min(Math.max(0,pos[0]*GRID_SIZE-halfWidth),this.game.worldSize[0]-this.width);
    const newY = Math.min(Math.max(0,pos[1]*GRID_SIZE-halfHeight),this.game.worldSize[1]-this.height);

    this._pos = [newX,newY];
  }
}
