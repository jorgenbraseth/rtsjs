import {GRID_SIZE} from './constants/GameConstants'

module.exports = {

  loadImage: (img) => {
    var imgElm = document.createElement("img");
    imgElm.setAttribute('src', img);
    return imgElm;
  },

  toGridPos: function(x,y,viewPort){
    return [Math.floor(x/GRID_SIZE)+viewPort.minX, Math.floor(y/GRID_SIZE)+viewPort.minY];
  }

};
