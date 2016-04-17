import ICON_WOOD from '../images/icon_wood.png'
import ICON_STONE from '../images/icon_stone2.png'
import ICON_FOOD from '../images/icon_food2.png'
import ICON_COIN from '../images/icon_coin.png'

const imageCache = {};

function loadImage(img){
  if (imageCache[img] === undefined) {
    var imgElm = document.createElement("img");
    imgElm.setAttribute('src', img);
    imageCache[img] = imgElm;
  }
  return imageCache[img];
}


module.exports = {

  loadImage: loadImage,

  intersects: function (r1, r2) {
    return !(r2.left >= r1.right ||
    r2.right <= r1.left ||
    r2.top >= r1.bottom ||
    r2.bottom <= r1.top);
  },

  containsPoint: function(rect, x,y){
    return x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom;
  },

  ICONS: {
    wood: loadImage(ICON_WOOD),
    stone: loadImage(ICON_STONE),
    food: loadImage(ICON_FOOD),
    gold: loadImage(ICON_COIN)
  }

};
