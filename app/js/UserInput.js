import { GRID_SIZE, KEY_BINDS } from './constants/GameConstants.js'

export default class UserInput {
  constructor(canvas){
    this.canvas = canvas;

    this.leftClickCallbacks = [];
    this.rightClickCallbacks = [];
    this.keyCallbacks = {};

    this.canvas.onclick = function(e){
      e.preventDefault();
      this.canvasClicked(e);
      return false;
    }.bind(this);

    this.canvas.oncontextmenu = function(e){
      e.preventDefault();
      for (var i = 0; i < this.rightClickCallbacks.length; i++) {
        this.rightClickCallbacks[i](e.layerX,e.layerY);
      }
      return false;
    }.bind(this);

    this.canvas.onkeydown = function(e){
      var callbacks = this.keyCallbacks[e.keyCode];
        if(callbacks){
        for (var cb = 0; cb < callbacks.length; cb++) {
          callbacks[cb]();
        }
      }
    }.bind(this)
  }

  onKey(key, callback) {
    if(this.keyCallbacks[key] === undefined){
      this.keyCallbacks[key] = [];
    }
    this.keyCallbacks[key].push(callback);
  }

  canvasClicked(e){
    for (var i = 0; i < this.leftClickCallbacks.length; i++) {
      this.leftClickCallbacks[i](e.layerX,e.layerY);
    }
  }

  onRightClick(callback) {
    this.rightClickCallbacks.push(callback);
  }

  onLeftClick(callback) {
    this.leftClickCallbacks.push(callback);
  }
}
