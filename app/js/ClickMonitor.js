import { GRID_SIZE } from './constants/GameConstants.js'

export default class ClickMonitor {
  constructor(canvas){
    this.leftClickCallbacks = [];
    this.rightClickCallbacks = [];
    this.canvas = canvas;
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
