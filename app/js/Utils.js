import {GRID_SIZE} from './constants/GameConstants'

module.exports = {
  toGridPos: function(x,y,viewPort){
    return [Math.floor(x/GRID_SIZE)+viewPort.minX, Math.floor(y/GRID_SIZE)+viewPort.minY];
  }
}
