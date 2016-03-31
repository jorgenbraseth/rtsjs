import { LAYER_GROUND, LAYER_GROUND_PLACEMENT, LAYER_FLOOR, LAYER_MAP, LAYER_AIR, GRID_SIZE } from './constants/GameConstants.js'


export default class Renderer {
  constructor(canvas, viewPort){
    this.canvas = canvas;
    this.screen = canvas.getContext('2d');

    this.canvas.setAttribute("width", ""+GRID_SIZE*viewPort.width);
    this.canvas.setAttribute("height", ""+GRID_SIZE*viewPort.height);

    this.canvas.style.cursor = "none";

  }

  render(layers,viewPort){
    this.clearScreen();
    this.screen.translate(-viewPort.minX*GRID_SIZE,-viewPort.minY*GRID_SIZE);
    this.drawLayer(layers[LAYER_MAP], viewPort);
    this.drawLayer(layers[LAYER_FLOOR], viewPort);
    this.drawLayer(layers[LAYER_GROUND], viewPort);
    this.drawLayer(layers[LAYER_GROUND_PLACEMENT], viewPort);
    this.drawLayer(layers[LAYER_AIR], viewPort);
    this.screen.translate(viewPort.minX*GRID_SIZE,viewPort.minY*GRID_SIZE);

  }

  clearScreen(){
    this.screen.clearRect(0,0,this.canvas.width, this.canvas.height);
  }

  drawLayer(layer,viewPort){
    var visibleMap = this.viewPortItemsForLayer(layer,viewPort);

    for (var y = 0; y < visibleMap.length; y++) {
      var row = visibleMap[y];
      for (var col = 0; col < row.length; col++) {
        var spriteList = row[col];

        for (var sprite = 0; sprite < spriteList.length; sprite++) {
          spriteList[sprite].drawSprite(this.screen, viewPort);
        }
      }
    }
  }

  viewPortItemsForLayer(layer,viewPort){
    var visibleSpritesFromLayer = layer.filter((sprite) => {return viewPort.inView(sprite.pos)});

    var visibleMap = [];
    for (var y = 0; y < viewPort.height; y++) {
      var row = [];
      for (var x = 0; x < viewPort.width; x++) {
        row.push([]);
      }
      visibleMap.push(row);
    }

    for (var spriteIdx = 0; spriteIdx < visibleSpritesFromLayer.length; spriteIdx++) {
      var sprite = visibleSpritesFromLayer[spriteIdx];
      var spriteX = parseInt(sprite.pos.x) - viewPort.minX;
      var spriteY = parseInt(sprite.pos.y) - viewPort.minY;

      if(spriteY < visibleMap.length && spriteX < visibleMap[0].length)
        visibleMap[spriteY][spriteX].push(sprite);
    }

    return visibleMap;
    // console.log(visibleSpritesFromLayer);

  }

  renderStatusPanel(statusPanel) {
    statusPanel.draw(this.screen);
  }

  renderCursor(cursor) {
    cursor.draw(this.screen);
  }
}
