import UserInput from './UserInput'

import Player from './sprites/Player'
import Rock from './sprites/Rock'
import Tree from './sprites/Tree'
import Grass from './sprites/Grass'
import Grass2 from './sprites/Grass2'
import Conveyor from './sprites/Conveyor'
import Blood from './sprites/Blood'

import { toGridPos } from './Utils'

import { map, map2, MAP_OBLONG, GENERATED } from './Maps'

import { LAYER_GROUND, LAYER_MAP, LAYER_AIR, GRID_SIZE, KEY_BINDS } from './constants/GameConstants.js'

import '../images/sword.png'

export default class Game {

  constructor(canvas){
    this.canvas = canvas;
    this.screen = canvas.getContext('2d');
    this.userInput = new UserInput(canvas);
    this.shiftHeld = false;

    this.viewPort = {
      width: 30,
      height: 20,
      minX: 0,
      minY: 0,
      inView: function(pos) {
        return pos.x >= this.minX && pos.y >= this.minY && pos.x < (this.minX+this.width) && pos.y < (this.minY+this.height);
      }
    };

    this.canvas.setAttribute("width", ""+GRID_SIZE*this.viewPort.width);
    this.canvas.setAttribute("height", ""+GRID_SIZE*this.viewPort.height);

    this.userInput.onLeftClick(
      function(x,y){
        this.gridLeftClicked(toGridPos(x,y,this.viewPort))
      }.bind(this)
    );

    this.userInput.onRightClick(
      function(x,y){
        this.gridRightClicked(toGridPos(x,y,this.viewPort))
      }.bind(this)
    );

    this.userInput.onKey(KEY_BINDS.ATTACK, this.enableAttackMode.bind(this));
    this.userInput.onKey(KEY_BINDS.MOVE, this.enableMoveMode.bind(this));

    this.userInput.onKey(KEY_BINDS.CAMERA_PAN_LEFT, this.panCameraLeft.bind(this));
    this.userInput.onKey(KEY_BINDS.CAMERA_PAN_RIGHT, this.panCameraRight.bind(this));
    this.userInput.onKey(KEY_BINDS.CAMERA_PAN_UP, this.panCameraUp.bind(this));
    this.userInput.onKey(KEY_BINDS.CAMERA_PAN_DOWN, this.panCameraDown.bind(this));

    this.userInput.onKeyUp(KEY_BINDS.CAMERA_PAN_LEFT, () => {this.cameraPanX=0});
    this.userInput.onKeyUp(KEY_BINDS.CAMERA_PAN_RIGHT, () => {this.cameraPanX=0});
    this.userInput.onKeyUp(KEY_BINDS.CAMERA_PAN_UP, () => {this.cameraPanY=0});
    this.userInput.onKeyUp(KEY_BINDS.CAMERA_PAN_DOWN, () => {this.cameraPanY=0});

    this.userInput.onKey(KEY_BINDS.SHIFT, () => {this.shiftHeld = true});
    this.userInput.onKeyUp(KEY_BINDS.SHIFT, () => {this.shiftHeld = false});

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

  panCameraDown(){
    this.cameraPanY = 1;
  }
  panCameraUp(){
    this.cameraPanY = -1;
  }
  panCameraLeft(){
    this.cameraPanX = -1;
  }
  panCameraRight(){
    this.cameraPanX = 1;
  }


  loadMap(mapData){
    var transposedMap = mapData[0].map(function(col, i) {
      return mapData.map(function(row) {
        return row[i]
      })
    });

    this.world = transposedMap;
  }

  init(){
    this.selectedSprites = [];
    this.cameraPanY = 0;
    this.cameraPanX = 0;

    this.layers = {};
    this.layers[LAYER_MAP] = [];
    this.layers[LAYER_GROUND] = [];
    this.layers[LAYER_AIR] = [];

    this.loadMap(GENERATED(60,70,0.3));
    // this.loadMap(MAP_OBLONG);

    var firstUnit = new Player(this,[0,0]);
    this.select(firstUnit, false);
    this.addSprite(LAYER_GROUND, firstUnit);

    for (var x = 0; x < this.world.length; x++) {
      for (var y = 0; y < this.world[x].length; y++) {
        if(this.world[x][y] === 0){
          this.addSprite(LAYER_GROUND, new Rock(this, [x,y]));
        }
        if(this.world[x][y] === 2){
          this.addSprite(LAYER_GROUND, new Tree(this, [x,y]));
        }
        this.addSprite(LAYER_MAP, new Grass2(this, [x,y]));
      }
    }

  }

  select(sprite, addToSelection) {
    if(!addToSelection){
      this.clearSelection();
    }
    sprite.select();
    this.selectedSprites.push(sprite);
  }

  tick(){
    this.moveCam();

    this.updateMapCosts();
    this.tickLayer(LAYER_MAP);
    this.tickLayer(LAYER_GROUND);
    this.tickLayer(LAYER_AIR);
  }

  moveCam(){
    if(
      (this.viewPort.minY+this.viewPort.height+this.cameraPanY <= this.world[0].length)
    &&
      (this.viewPort.minY+this.cameraPanY >= 0)
    ){
      this.viewPort.minY += this.cameraPanY;
    }

    if(
      (this.viewPort.minX+this.viewPort.width+this.cameraPanX <= this.world.length)
      &&
      (this.viewPort.minX+this.cameraPanX >= 0)
    ){
      this.viewPort.minX += this.cameraPanX;
    }

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
    if(this.selectedSprites){
      for (var i = 0; i < this.selectedSprites.length; i++) {
        var sprite = this.selectedSprites[i];
        sprite.unselect();
      }
    }
    this.selectedSprites = [];
  }

  gridLeftClicked(coords){
    var clickedSprite = this.spriteAt(coords);

    if(clickedSprite){
      this.select(clickedSprite, this.shiftHeld);
    }else{
      // this.addSprite(LAYER_MAP, new Conveyor(this, coords));
      // this.addSprite(LAYER_MAP, new Blood(this, coords));
      this.clearSelection();
    }
  }

  gridRightClicked(coords){
    var clickedSprite = this.spriteAt(coords);

    if(clickedSprite){
      for (var i = 0; i < this.selectedSprites.length; i++) {
        var selected = this.selectedSprites[i];
        selected.attackTarget(clickedSprite);
      }
    }else{
      for (var i = 0; i < this.selectedSprites.length; i++) {
        var selected = this.selectedSprites[i];
        selected.moveTo(coords);
      }
    }
  }

  removeSprite(sprite){
    this.removeSpriteFromLayer(this.layers[LAYER_AIR],sprite);
    this.removeSpriteFromLayer(this.layers[LAYER_GROUND],sprite);
    this.removeSpriteFromLayer(this.layers[LAYER_MAP],sprite);
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
      sprite.drawSprite(this.screen, this.viewPort);
    }
  }

  clearScreen(){
    this.screen.clearRect(0,0,this.canvas.width, this.canvas.height);
  }

  draw(){

    this.clearScreen();
    this.screen.translate(-this.viewPort.minX*GRID_SIZE,-this.viewPort.minY*GRID_SIZE);

    this.drawLayer(this.layers[LAYER_MAP]);
    this.drawLayer(this.layers[LAYER_GROUND]);
    this.drawLayer(this.layers[LAYER_AIR]);
    this.screen.translate(this.viewPort.minX*GRID_SIZE,this.viewPort.minY*GRID_SIZE);
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
