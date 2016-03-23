import {GRID_SIZE} from './constants/GameConstants'

const imageCache = {}

module.exports = {

  loadImage: (img) => {
    if(imageCache[img] === undefined){
      var imgElm = document.createElement("img");
      imgElm.setAttribute('src', img);
      imageCache[img] = imgElm;
    }
    return imageCache[img];
  },

  toGridPos: function(x,y,viewPort){
    return [Math.floor(x/GRID_SIZE)+viewPort.minX, Math.floor(y/GRID_SIZE)+viewPort.minY];
  }

};
