import {GRID_SIZE} from './constants/GameConstants'

const imageCache = {}

module.exports = {

  loadImage: (img) => {
    if (imageCache[img] === undefined) {
      var imgElm = document.createElement("img");
      imgElm.setAttribute('src', img);
      imageCache[img] = imgElm;
    }
    return imageCache[img];
  },

  toGridPos: function (x, y, viewPort) {
    return [Math.floor(x / GRID_SIZE) + viewPort.minX, Math.floor(y / GRID_SIZE) + viewPort.minY];
  },

  intersects: function (r1, r2) {
    return !(r2.left >= r1.right ||
    r2.right <= r1.left ||
    r2.top >= r1.bottom ||
    r2.bottom <= r1.top);
  }

};
