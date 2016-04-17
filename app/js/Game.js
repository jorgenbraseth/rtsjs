import UserInput from './UserInput'

import Player from './sprites/KeyboardPlayer'
import Rock from './sprites/gatherables/Rock'
import Tree from './sprites/gatherables/Tree'
import Grass2 from './sprites/terrain/Grass2'
import House from './sprites/gatherables/House'
import House2 from './sprites/gatherables/House2'

import Renderer from './Renderer'
import ViewPort from './ViewPort'

import StatusPanel from './sprites/ui/StatusPanel'
import Cursor from './sprites/ui/Cursor'
import QuickBar from './sprites/ui/QuickBar'




const UnitTypes = {
  House: House,
  House2: House2,
  Rock: Rock
};

import { toGridPos, intersects, containsPoint } from './Utils'

import { GENERATED, MAP_TEST } from './Maps'

import { LAYERS, GRID_SIZE, KEY_BINDS } from './constants/GameConstants.js'

export default class Game {

  constructor(canvas){

    this.canvas = canvas;

    this.viewPort = new ViewPort(this);

    this.userInput = new UserInput(canvas);
    this.shiftHeld = false;
    this.tickCallBacks = [];
    canvas.onblur = () => {canvas.focus()};

    this.layers = {};

    for(var layer in LAYERS){
      this.layers[LAYERS[layer]] = [];
    }

    this.renderer = new Renderer(canvas, this.viewPort);

    this.cursor = new Cursor();
    canvas.onmousemove = this.onMouseMove.bind(this);

    this.quickBar = new QuickBar(this, [canvas.width/2 - GRID_SIZE*5, canvas.height - GRID_SIZE*1.5]);
    this.addSprite(LAYERS.UI, this.quickBar);
    this.quickBar.setSlot(0,House);
    this.quickBar.setSlot(1,UnitTypes.House2);

    this.userInput.onLeftClick(this.leftClicked.bind(this));

    this.userInput.onRightClick(
      function(x,y){
        this.gridRightClicked(this.viewPort.toGridPos(x,y))
      }.bind(this)
    );

    this.userInput.onKey(KEY_BINDS.QUICKSLOT_1, (()=>{this.enablePlacementMode("House")}).bind(this));
    this.userInput.onKey(KEY_BINDS.QUICKSLOT_2, (()=>{this.enablePlacementMode("House2")}).bind(this));

    this.bindCameraControls();

    this.userInput.onKey(KEY_BINDS.SHIFT, () => {this.shiftHeld = true});
    this.userInput.onKeyUp(KEY_BINDS.SHIFT, () => {this.shiftHeld = false});

    this.init();
  }

  onMouseMove(e){
    this.mousePixelPos = [e.layerX,e.layerY];
    this.mouseGridPos = this.viewPort.toGridPos(...this.mousePixelPos);

    this.cursor.setPosition(...this.mousePixelPos);

    this.layers[LAYERS.LAYER_GROUND_PLACEMENT].forEach(spriteToBePlaced => {
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
  enablePlacementMode(unitType){
    var sprite = new UnitTypes[unitType](this,this.mouseGridPos);

    sprite.beingPlaced = true;
    this.setMode('PLACE',sprite);
    this.addSprite(LAYERS.LAYER_GROUND_PLACEMENT, sprite);
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
    this.worldSize = [transposedMap.length,transposedMap[0].length];
  }

  init(){
    this.selectedSprites = [];
    this.cameraPanY = 0;
    this.cameraPanX = 0;



    // this.loadMap(GENERATED(31,21,0.2));
    this.loadMap(MAP_TEST);

    this._player = new Player(this,[0.2,0.6]);
    this.statusPanel = new StatusPanel(this.player,this);
    this.addSprite(LAYERS.LAYER_GROUND, this.player);

    this.initKeyboardPlayerMovement();

    for (var x = 0; x < this.world.length; x++) {
      for (var y = 0; y < this.world[x].length; y++) {
        if(this.world[x][y] === 0){
          this.addSprite(LAYERS.LAYER_GROUND, new Rock(this, [x,y]));
        }
        if(this.world[x][y] === 2){
          this.addSprite(LAYERS.LAYER_GROUND, new Tree(this, [x,y]));
        }
        this.addSprite(LAYERS.LAYER_MAP, new Grass2(this, [x,y]));
      }
    }

    this.enableDefaultMode();

  }

  selectSprite(sprite, addToSelection) {
    if(!addToSelection){
      this.clearSelection();
    }
    sprite.select();
    if(sprite.infoWindow){
      this.addSprite(LAYERS.UI,sprite.infoWindow)
    }
    this.selectedSprites.push(sprite);
  }

  tick(){
    this.focusCamOnPlayer();
    // this.moveCam();

    for(var layer in LAYERS){
      this.tickLayer(LAYERS[layer]);
    }

    this.tickCallBacks.forEach(cb=>cb());
  }

  onTick(callback){
    this.tickCallBacks.push(callback);
  }

  focusCamOnPlayer(){
    this.viewPort.focusOnGridPos(this.player.gridPos);
  }

  moveCam(){
    if(
      (this.viewPort.minYInGridUnits+this.viewPort.heightInGridUnits+this.cameraPanY <= this.world[0].length)
      &&
      (this.viewPort.minYInGridUnits+this.cameraPanY >= 0)
    ){
      this.viewPort.minYInGridUnits += this.cameraPanY;
    }

    if(
      (this.viewPort.minXInGridUnits+this.viewPort.widthInGridUnits+this.cameraPanX <= this.world.length)
      &&
      (this.viewPort.minXInGridUnits+this.cameraPanX >= 0)
    ){
      this.viewPort.minXInGridUnits += this.cameraPanX;
    }

  }

  spriteAt(coords, countPlayer=false){
    var x = coords[0];
    var y = coords[1];

    var found = undefined;
    for (var i = this.layers[LAYERS.LAYER_AIR].length -1; i >= 0; i--) {
      var sprite = this.layers[LAYERS.LAYER_AIR][i];
      if(sprite.pos.x == x && sprite.pos.y == y){
        found = sprite;
      }
    }
    for (var i = this.layers[LAYERS.LAYER_GROUND].length -1; i >= 0; i--) {
      var sprite = this.layers[LAYERS.LAYER_GROUND][i];
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
        if(sprite.infoWindow){
          this.removeSpriteFromLayer(this.layers[LAYERS.UI],sprite.infoWindow);
        }
      }
    }
    this.selectedSprites = [];
  }

  leftClicked(x,y){
    const coordsShiftedForViewPort = [x+this.viewPort.minXInGridUnits*GRID_SIZE,y+this.viewPort.minYInGridUnits*GRID_SIZE];
    const clickedSprite = this.findSpriteAtPos(...coordsShiftedForViewPort);

    if(this.actionMode === 'PLACE' && this.placingUnit.isPlaceable){
      this.build(this.viewPort.toGridPos(x,y),this.placingUnit);
      this.placingUnit=undefined;
    }else if (clickedSprite!=undefined){
      clickedSprite.click(x,y);
    }else{
      this.clearSelection();
    }

    return undefined
  }

  findSpriteAtPos(x,y) {
    const layersToCheck = [LAYERS.UI, LAYERS.LAYER_AIR, LAYERS.LAYER_GROUND];

    for (var l = 0; l < layersToCheck.length; l++) {
      var layer = layersToCheck[l];
      const clicked = this.layers[layer].find((sprite)=>{return containsPoint(sprite.boundingBox,x,y)});
      if(clicked !== undefined){
        return clicked;
      }
    }
  }

  build(coords, unit){
    var playerResources = this.player.resources;
    var cost = unit.cost;

    this.removeSprite(unit);
    this.enableDefaultMode();

    for(var resourceType in cost){
      playerResources[resourceType] -= cost[resourceType];
    }
    unit.beingPlaced = false;
    unit.setPosition(...coords);
    this.addSprite(LAYERS.LAYER_GROUND, unit);
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
      }
    }
  }

  removeSprite(sprite){
    for(var layer in LAYERS){
      this.removeSpriteFromLayer(this.layers[LAYERS[layer]],sprite);
    }
  }

  positionFree(coords, countPlayer=false){
    var inLegalMapArea = coords[0] >=0 && coords[1] >= 0;
    var found = inLegalMapArea && this.spriteAt(coords,countPlayer);
    return found === undefined;
  }

  findCollision(spriteToCheck){
    var found = [LAYERS.LAYER_GROUND].map((layerIdx)=>{
      var layer = this.layers[layerIdx];

      var foundSprite = layer.find((sprite)=>{
        return sprite != spriteToCheck && intersects(sprite.boundingBox, spriteToCheck.boundingBox)
      });

      return foundSprite;


    });
   return found[0];
  }

  canAfford(cost){
    var playerResources = this.player.resources;
    for(var resourceType in cost){
      if(playerResources[resourceType]<cost[resourceType]){
        return false;
      }
    }
    return true;
  }

  isWithinBuildRange(coords){
    var dx = Math.abs(coords[0]-this.player.pos.x);
    var dy = Math.abs(coords[1]-this.player.pos.y);

    var distance = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
    return distance <= 5;

  }

  removeSpriteFromLayer(layer, sprite){
    for (var i = 0; i < layer.length; i++) {
      var spr = layer[i];
      if(spr == sprite){
        layer.splice(i,1);
      }
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
    this.renderer.render(this.layers);
    this.renderer.renderUi(this.statusPanel);
    this.renderer.renderUi(this.quickBar);

    //Cursor last
    this.renderer.renderUi(this.cursor);
  }
  run(){
    setInterval(function(){
      this.tick();
      this.draw();
    }.bind(this),1000/60);

  }


}
