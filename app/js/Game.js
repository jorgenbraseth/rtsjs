import ClickMonitor from './ClickMonitor'

import DummyUnit from './sprites/DummyUnit'
import Rock from './sprites/Rock'
import Grass from './sprites/Grass'


import { LAYER_BACK, LAYER_BACKGROUND, LAYER_FRONT, GRID_SIZE } from './constants/GameConstants.js'

export default class Game {

  constructor(canvas){
    this.canvas = canvas;
    this.screen = canvas.getContext('2d');
    this.clickMonitor = new ClickMonitor(canvas);

    this.clickMonitor.onLeftClick(function(x,y){this.gridClicked(Math.floor(x/GRID_SIZE),Math.floor(y/GRID_SIZE))}.bind(this));
    this.init();
  }

  init(){
    this.layers = {};
    this.layers[LAYER_BACKGROUND] = [];
    this.layers[LAYER_BACK] = [];
    this.layers[LAYER_FRONT] = [];

    var world = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
      [1,0,0,0,0,1,0,1,1,0,1,0,0,0,0],
      [0,1,0,0,0,1,1,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
      [0,1,1,1,1,1,0,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    this.world = world;

    this.addSprite(LAYER_FRONT, new DummyUnit(this,0,0));

    for (var x = 0; x < world.length; x++) {
      for (var y = 0; y < world[x].length; y++) {
        if(world[x][y] === 1){
          this.addSprite(LAYER_BACK, new Rock(x,y));
        }
        this.addSprite(LAYER_BACKGROUND, new Grass(x,y));
      }
    }

  }

  tick(){
    for (var x = 0; x < this.world.length; x++) {
      for (var y = 0; y < this.world[x].length; y++) {
        this.world[x][y] = 0;
      }
    }

    this.tickLayer(LAYER_BACKGROUND);
    this.tickLayer(LAYER_BACK);
    this.tickLayer(LAYER_FRONT);
  }

  gridClicked(x,y){
    var currentSelected = this.selectedSprite;
    this.selectedSprite = undefined;
    if(currentSelected){
      currentSelected.unselect();
    }

    for (var i = 0; i < this.layers[LAYER_FRONT].length; i++) {
      var sprite = this.layers[LAYER_FRONT][i];
      if(sprite.pos.x == x && sprite.pos.y == y){

        this.selectedSprite = sprite;
        sprite.select();
      }
    }

    if(this.selectedSprite == undefined){
        this.addSprite(LAYER_FRONT, new DummyUnit(this, x, y));
    }

  }

  tickLayer(layer){
    var sprites = this.layers[layer];

    for (var i = 0; i < sprites.length; i++) {
      var sprite = sprites[i];
      this.world[Math.round(sprite.pos.x)][Math.round(sprite.pos.y)] += sprite.moveCost;
    }

    for (var i = 0; i < sprites.length; i++) {
      var sprite = sprites[i];
      sprite.tick(this.world);
      this.world[Math.round(sprite.pos.x)][Math.round(sprite.pos.y)] += sprite.moveCost;
    }
  }

  drawLayer(layer){
    for (var i = 0; i < layer.length; i++) {
      var sprite = layer[i];
      sprite.draw(this.screen);
    }
  }

  clearScreen(){
    this.screen.clearRect(0,0,this.canvas.width, this.canvas.height);
  }

  draw(){

    this.clearScreen();

   // this.drawGrid();

    this.drawLayer(this.layers[LAYER_BACKGROUND]);
    this.drawLayer(this.layers[LAYER_BACK]);
    this.drawLayer(this.layers[LAYER_FRONT]);

  }

  drawGrid(){
    this.screen.strokeStyle = "rgba(0,0,250,0.2)";
    this.screen.lineWidth = 1;
    for(var x=0;x<this.canvas.width;x+=GRID_SIZE){
        this.screen.beginPath();
        this.screen.lineTo(x,0);
        this.screen.lineTo(x,this.canvas.height);
        this.screen.closePath();
      this.screen.stroke();
    }

    for(var y=0;y<this.canvas.height;y+=GRID_SIZE){

      this.screen.beginPath();
      this.screen.lineTo(0,y);
      this.screen.lineTo(this.canvas.width,y);
      this.screen.closePath();
      this.screen.stroke();
    }
  }

  addSprite(layer, sprite){
    this.layers[layer].push(sprite);
  }

  run(){

    setInterval(function(){
      this.tick();
      this.draw();
    }.bind(this),1000/10);

  }
}
