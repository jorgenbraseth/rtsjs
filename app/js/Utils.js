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
  }

};
