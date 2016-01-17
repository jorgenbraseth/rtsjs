import {GRID_SIZE} from './constants/GameConstants'

module.exports = {
  toGridPos: function(x,y){
    return [Math.floor(x/GRID_SIZE), Math.floor(y/GRID_SIZE)];
  }
}
