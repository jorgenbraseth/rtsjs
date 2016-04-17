import { LAYERS, GRID_SIZE } from './constants/GameConstants.js'


export default class Renderer {
  constructor(canvas, viewPort){
    this.canvas = canvas;
    this.screen = canvas.getContext('2d');

    this.canvas.setAttribute("width", ""+GRID_SIZE*viewPort.widthInGridUnits);
    this.canvas.setAttribute("height", ""+GRID_SIZE*viewPort.heightInGridUnits);

    this.canvas.style.cursor = "none";

    this.viewPort = viewPort;

  }

  render(layers){
    const viewPort = this.viewPort;
    this.clearScreen();
    this.screen.save();
    this.screen.translate(-viewPort.minXPx,-viewPort.minYPx);

    this.drawGridLayer(layers[LAYERS.LAYER_MAP], viewPort);
    this.drawGridLayer(layers[LAYERS.LAYER_FLOOR], viewPort);
    this.drawGridLayer(layers[LAYERS.LAYER_GROUND], viewPort);
    this.drawGridLayer(layers[LAYERS.LAYER_GROUND_PLAYER], viewPort);
    this.drawGridLayer(layers[LAYERS.LAYER_GROUND_PLACEMENT], viewPort);
    this.drawGridLayer(layers[LAYERS.LAYER_AIR], viewPort);
    this.drawPixelLayer(layers[LAYERS.UI]);
    this.screen.restore();

  }

  clearScreen(){
    this.screen.clearRect(0,0,this.canvas.widthInGridUnits, this.canvas.heightInGridUnits);
  }

  drawPixelLayer(layer){
    for (var spriteIdx = 0; spriteIdx < layer.length; spriteIdx++) {
      var sprite = layer[spriteIdx];
      sprite.drawSprite(this.screen);
    }
  }
  drawGridLayer(layer, viewPort){
    layer
      .filter((sprite) => {return viewPort.isRectVisible(sprite.boundingBox)})
      .sort((s1,s2)=>{return s1.pixels.boundingBox.bottom-s2.pixels.boundingBox.bottom})
      .forEach((s)=>s.drawSprite(this.screen, viewPort));
  }

  renderUi(component){
    component.draw(this.screen);
  }
}
