import { LAYERS, GRID_SIZE } from './constants/GameConstants.js'


const TOOLBAR_HEIGHT = 120;

export default class Renderer {
  constructor(canvas, viewPort){
    this.canvas = canvas;
    this.screen = canvas.getContext('2d');
    this.canvas.style.cursor = "none";

    this.screenWidth = GRID_SIZE*viewPort.widthInGridUnits;
    this.screenHeight = GRID_SIZE * viewPort.heightInGridUnits+TOOLBAR_HEIGHT;
    this.viewPortHeight = GRID_SIZE * viewPort.heightInGridUnits;

    this.canvas.setAttribute("width", ""+ this.screenWidth);
    this.canvas.setAttribute("height", ""+this.screenHeight);

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
    this.drawGridLayer(layers[LAYERS.LAYER_FLOOR_DECORE], viewPort);
    this.drawGridLayer(layers[LAYERS.LAYER_GROUND_PLAYER], viewPort);
    this.drawGridLayer(layers[LAYERS.LAYER_GROUND_PLACEMENT], viewPort);
    this.drawGridLayer(layers[LAYERS.LAYER_AIR], viewPort);

    this.screen.restore();

    this.drawToolbar();
    this.drawPixelLayer(layers[LAYERS.UI]);
  }

  clearScreen(){
    this.screen.clearRect(0,0,this.screenWidth, this.screenHeight);
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

  drawToolbar() {
    this.screen.save();
    this.screen.translate(0,this.viewPortHeight);
    this.screen.fillStyle = "black";
    this.screen.fillRect(0,0,this.screenWidth, TOOLBAR_HEIGHT);
    this.screen.restore();
  }
}
