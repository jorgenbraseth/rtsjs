import UserInput from './UserInput'

import Player from './sprites/Player'
import Rock from './sprites/gatherables/Rock'
import Tree from './sprites/gatherables/Tree'
import Grass2 from './sprites/terrain/Grass2'
import StatusPanel from './sprites/StatusPanel'
import Cursor from './sprites/Cursor'
import House from './sprites/buildings/House'
import Renderer from './Renderer'

import { toGridPos } from './Utils'

import { GENERATED, MAP_TEST } from './Maps'

import { LAYER_GROUND, LAYER_GROUND_PLACEMENT, LAYER_FLOOR, LAYER_MAP, LAYER_AIR, GRID_SIZE, KEY_BINDS } from './constants/GameConstants.js'

export default class Game {

  constructor(canvas){

    this.canvas = canvas;
    this.userInput = new UserInput(canvas);
    this.shiftHeld = false;
    this.tickCallBacks = [];
    canvas.onblur = () => {canvas.focus()};

    this.viewPort = {
      width: 30,
      height: 20,
      minX: 0,
      minY: 0,
      inView: function(pos) {
        return pos.x >= this.minX && pos.y >= this.minY && pos.x < (this.minX+this.width) && pos.y < (this.minY+this.height);
      }
    };

    this.renderer = new Renderer(canvas, this.viewPort);

    this.cursor = new Cursor();
    canvas.onmousemove = this.onMouseMove.bind(this);

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
    this.userInput.onKey(KEY_BINDS.PLACE_BUILDING, this.enablePlacementMode.bind(this));

    this.bindCameraControls();


    this.userInput.onKey(KEY_BINDS.SHIFT, () => {this.shiftHeld = true});
    this.userInput.onKeyUp(KEY_BINDS.SHIFT, () => {this.shiftHeld = false});

    this.init();
  }

  onMouseMove(e){
    this.mousePixelPos = [e.layerX,e.layerY];

    this.mouseGridPos = this.mousePixelPos.map((coord) => { return parseInt(coord / GRID_SIZE) });
    this.mouseGridPos[0] += this.viewPort.minX;
    this.mouseGridPos[1] += this.viewPort.minY;

    this.cursor.setPosition(...this.mousePixelPos);

    this.layers[LAYER_GROUND_PLACEMENT].forEach(spriteToBePlaced => {
      spriteToBePlaced.setPosition(...this.mouseGridPos);
    });
  }

  initKeyboardPlayerMovement() {
    this.userInput.onKey(KEY_BINDS.MOVE_RIGHT, ()=>this.player.moveRight(true));
    this.userInput.onKeyUp(KEY_BINDS.MOVE_RIGHT, ()=>this.player.moveRight(false));
    this.userInput.onKey(KEY_BINDS.MOVE_LEFT, ()=>this.player.moveLeft(true));
    this.userInput.onKeyUp(KEY_BINDS.MOVE_LEFT, ()=>this.player.moveLeft(false));

    this.userInput.onKey(KEY_BINDS.MOVE_UP, ()=>this.player.moveUp(true));
    this.userInput.onKeyUp(KEY_BINDS.MOVE_UP, ()=>this.player.moveUp(false));
    this.userInput.onKey(KEY_BINDS.MOVE_DOWN, ()=>this.player.moveDown(true));
    this.userInput.onKeyUp(KEY_BINDS.MOVE_DOWN, ()=>this.player.moveDown(false));
  }

  get player() {
    return this._player;
  }

  bindCameraControls(){
    this.userInput.onKey(KEY_BINDS.CAMERA_PAN_LEFT, this.panCameraLeft.bind(this));
    this.userInput.onKey(KEY_BINDS.CAMERA_PAN_RIGHT, this.panCameraRight.bind(this));
    this.userInput.onKey(KEY_BINDS.CAMERA_PAN_UP, this.panCameraUp.bind(this));
    this.userInput.onKey(KEY_BINDS.CAMERA_PAN_DOWN, this.panCameraDown.bind(this));

    this.userInput.onKeyUp(KEY_BINDS.CAMERA_PAN_LEFT, () => {this.cameraPanX=0});
    this.userInput.onKeyUp(KEY_BINDS.CAMERA_PAN_RIGHT, () => {this.cameraPanX=0});
    this.userInput.onKeyUp(KEY_BINDS.CAMERA_PAN_UP, () => {this.cameraPanY=0});
    this.userInput.onKeyUp(KEY_BINDS.CAMERA_PAN_DOWN, () => {this.cameraPanY=0});
  };


  setMode(mode,args) {
    if(this.actionMode==='PLACE'){
      this.removeSprite(this.placingUnit);
      this.placingUnit = undefined;
    }
    this.actionMode = mode;
    this.cursor.setMode(this.actionMode,args);
  }
  enableAttackMode(){
    this.setMode('ATTACK')
  }
  enableMoveMode(){
    this.setMode('MOVE')
  }
  enableDefaultMode(){
    this.setMode('DEFAULT')
  }
  enablePlacementMode(){
    var sprite = new House(this,this.mouseGridPos);
    sprite.beingPlaced = true;
    this.setMode('PLACE',sprite);
    this.addSprite(LAYER_GROUND_PLACEMENT, sprite);
    this.placingUnit = sprite;
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
    this.layers[LAYER_FLOOR] = [];
    this.layers[LAYER_GROUND] = [];
    this.layers[LAYER_GROUND_PLACEMENT] = [];
    this.layers[LAYER_AIR] = [];

    // this.loadMap(GENERATED(100,70,0.2));
    this.loadMap(MAP_TEST);

    this._player = new Player(this,[0,0]);
    this.statusPanel = new StatusPanel(this.player,this);
    this.player.select();
    this.addSprite(LAYER_GROUND, this.player);

    this.initKeyboardPlayerMovement();

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

    this.enableDefaultMode();

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
    this.tickLayer(LAYER_FLOOR);
    this.tickLayer(LAYER_GROUND);
    this.tickLayer(LAYER_AIR);

    this.tickCallBacks.forEach(cb=>cb());
  }

  onTick(callback){
    this.tickCallBacks.push(callback);
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

  spriteAt(coords, countPlayer=false){
    var x = coords[0];
    var y = coords[1];

    var found = undefined;
    for (var i = this.layers[LAYER_AIR].length -1; i >= 0; i--) {
      var sprite = this.layers[LAYER_AIR][i];
      if(sprite.pos.x == x && sprite.pos.y == y){
        found = sprite;
      }
    }
    for (var i = this.layers[LAYER_GROUND].length -1; i >= 0; i--) {
      var sprite = this.layers[LAYER_GROUND][i];
      if(sprite.pos.x == x && sprite.pos.y == y){
        found = sprite;
      }
    }

    if(found && !countPlayer && found.constructor.name === 'Player'){
      found = undefined;
    }
    return found;
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

    if(this.actionMode === 'PLACE' && this.positionFree(coords,true) ){
      this.build(coords,this.placingUnit);
      this.placingUnit=undefined;
    }

    if(clickedSprite){
      this.select(clickedSprite, this.shiftHeld);
    }else{
      // this.addSprite(LAYER_FLOOR, new TreeStump(this, coords));
      // this.addSprite(LAYER_MAP, new Blood(this, coords));
      this.clearSelection();
    }
  }

  build(coords, unit){
    var playerResources = this.player.resources;
    var cost = unit.cost;

    console.log(cost);
    console.log(playerResources);
    this.removeSprite(unit);
    this.enableDefaultMode();

    if(cost.wood < playerResources.wood && cost.stone < playerResources.stone) {
      playerResources.wood -= cost.wood;
      playerResources.stone -= cost.stone;
      unit.beingPlaced = false;
      unit.setPosition(...coords);
      this.addSprite(LAYER_GROUND, unit);
    }else{
      console.log("Not enough resources to build " + unit.constructor.name);
    }


  }

  gridRightClicked(coords){
    var clickedSprite = this.spriteAt(coords);
    if(this.actionMode!=='DEFAULT'){
      this.enableDefaultMode();
    }else{

      if(clickedSprite){
        if(clickedSprite.fireAt){
          this.player.attackTarget(clickedSprite);
        }else if(clickedSprite.gather){
          this.player.attackTarget(clickedSprite);
        }
      }else{
        this.player.moveTo(coords);
      }
    }
  }

  removeSprite(sprite){
    this.removeSpriteFromLayer(this.layers[LAYER_AIR],sprite);
    this.removeSpriteFromLayer(this.layers[LAYER_GROUND],sprite);
    this.removeSpriteFromLayer(this.layers[LAYER_GROUND_PLACEMENT],sprite);
    this.removeSpriteFromLayer(this.layers[LAYER_FLOOR],sprite);
    this.removeSpriteFromLayer(this.layers[LAYER_MAP],sprite);
  }

  positionFree(coords, countPlayer=false){
    var found = this.spriteAt(coords,countPlayer);
    return found === undefined;
  }

  canAfford(cost){
    var playerResources = this.player.resources;
    for(var resourceType in cost){
      if(playerResources[resourceType] === undefined || playerResources[resourceType]<cost[resourceType]){
        return false;
      }
    }
    return true;
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

  addSprite(layer, sprite){
    this.layers[layer].push(sprite);
  }

  draw(){
    this.renderer.render(this.layers, this.viewPort);
    this.renderer.renderStatusPanel(this.statusPanel);
    this.renderer.renderCursor(this.cursor);
  }
  run(){
    setInterval(function(){
      this.tick();
      this.draw();
    }.bind(this),1000/60);

  }
}
