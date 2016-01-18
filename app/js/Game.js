import UserInput from './UserInput'

import WoodenBall from './sprites/WoodenBall'
import Rock from './sprites/Rock'
import Grass from './sprites/Grass'

import { toGridPos } from './Utils'

import { map, map2 } from './Maps'

import { LAYER_GROUND, LAYER_MAP, LAYER_AIR, GRID_SIZE, KEY_BINDS } from './constants/GameConstants.js'

import '../images/sword.png'

export default class Game {

  constructor(canvas){
    this.canvas = canvas;
    this.screen = canvas.getContext('2d');
    this.userInput = new UserInput(canvas);

    this.userInput.onLeftClick(
      function(x,y){
        this.gridLeftClicked(toGridPos(x,y))
      }.bind(this)
    );

    this.userInput.onRightClick(
      function(x,y){
        this.gridRightClicked(toGridPos(x,y))
      }.bind(this)
    );

    this.userInput.onKey(KEY_BINDS.ATTACK, this.enableAttackMode.bind(this));
    this.userInput.onKey(KEY_BINDS.MOVE, this.enableMoveMode.bind(this));
    this.init();
  }


  enableAttackMode(){
    this.actionMode = 'ATTACK';
    console.log(this.actionMode);
  }
  enableMoveMode(){
    this.actionMode = 'MOVE';
    console.log(this.actionMode);
  }



  init(){
    this.layers = {};
    this.layers[LAYER_MAP] = [];
    this.layers[LAYER_GROUND] = [];
    this.layers[LAYER_AIR] = [];

    this.world = map2;

    var firstUnit = new WoodenBall(this,[0,0]);
    firstUnit.select();
    this.selectedSprite = firstUnit;
      this.addSprite(LAYER_GROUND, firstUnit);

    for (var x = 0; x < this.world.length; x++) {
      for (var y = 0; y < this.world[x].length; y++) {
        if(this.world[x][y] === 0){
          this.addSprite(LAYER_GROUND, new Rock(this, [x,y]));
        }
        this.addSprite(LAYER_MAP, new Grass(this, [x,y]));
      }
    }

  }

  tick(){
    this.updateMapCosts();
    this.tickLayer(LAYER_MAP);
    this.tickLayer(LAYER_GROUND);
    this.tickLayer(LAYER_AIR);
  }

  spriteAt(coords){
    var x = coords[0];
    var y = coords[1];
    for (var i = this.layers[LAYER_AIR].length -1; i >= 0; i--) {
      var sprite = this.layers[LAYER_AIR][i];
      if(sprite.pos.x == x && sprite.pos.y == y){
        return sprite;
      }
    }
    for (var i = this.layers[LAYER_GROUND].length -1; i >= 0; i--) {
      var sprite = this.layers[LAYER_GROUND][i];
      if(sprite.pos.x == x && sprite.pos.y == y){
        return sprite;
      }
    }

    return undefined;
  }

  clearSelection(){
    if(this.selectedSprite){
      this.selectedSprite.unselect();
    }
    this.selectedSprite = undefined;
  }
  selectSprite(sprite){
    this.clearSelection();
    this.selectedSprite = sprite;
    sprite.select();
  }

  gridLeftClicked(coords){
    var clickedSprite = this.spriteAt(coords);

    if(clickedSprite){
      this.selectSprite(clickedSprite);
    }else{
      this.addSprite(LAYER_GROUND, new WoodenBall(this, coords));
    }
  }

  gridRightClicked(coords){
    var clickedSprite = this.spriteAt(coords);

    if(clickedSprite){
      this.selectedSprite.attackTarget(clickedSprite);
    }else{
      this.selectedSprite.moveTo(coords);
    }
  }

  removeSprite(sprite){
    this.removeSpriteFromLayer(this.layers[LAYER_AIR],sprite);
    this.removeSpriteFromLayer(this.layers[LAYER_GROUND],sprite);

  }

  positionFree(x,y){
    return this.spriteAt([x,y]) === undefined;
  }

  removeSpriteFromLayer(layer, sprite){
    for (var i = 0; i < layer.length; i++) {
      var spr = layer[i];
      if(spr == sprite){
        layer.splice(i,1);
      }
    }
  }

  updateMapCosts(){
    for (var x = 0; x < this.world.length; x++) {
      for (var y = 0; y < this.world[x].length; y++) {
        this.world[x][y] = 1;
      }
    }

    var sprites = this.layers[LAYER_GROUND];
    for (var i = 0; i < sprites.length; i++) {
      var sprite = sprites[i];
      this.world[sprite.targetX][sprite.targetY] = sprite.moveCost;
    }


  }

  tickLayer(layer){
    var sprites = this.layers[layer];

    for (var i = 0; i < sprites.length; i++) {
      var sprite = sprites[i];
      sprite.tick(this.world);
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

    this.drawLayer(this.layers[LAYER_MAP]);
    this.drawLayer(this.layers[LAYER_GROUND]);
    this.drawLayer(this.layers[LAYER_AIR]);

  }

  addSprite(layer, sprite){
    this.layers[layer].push(sprite);
  }

  run(){
    setInterval(function(){
      this.tick();
      this.draw();
    }.bind(this),1000/60);

  }
}
