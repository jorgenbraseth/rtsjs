import UserInput from './UserInput'

import Player from './sprites/KeyboardPlayer'
import Rock from './sprites/gatherables/Rock'
import Tree from './sprites/gatherables/Tree'
import Grass2 from './sprites/terrain/Grass2'
import Butcher from './sprites/gatherables/Butcher'
import Office from './sprites/gatherables/Office'
import ConveyorEast from './sprites/conveyors/ConveyorEast'
import ConveyorSouth from './sprites/conveyors/ConveyorSouth'
import ConveyorNorth from './sprites/conveyors/ConveyorNorth'
import ConveyorWest from './sprites/conveyors/ConveyorWest'
import LoaderEast from './sprites/loaders/LoaderEast'
import LoaderWest from './sprites/loaders/LoaderWest'

import Renderer from './Renderer'
import ViewPort from './ViewPort'

import InfoWindow from './sprites/ui/InfoWindow';
import StatusPanel from './sprites/ui/StatusPanel'
import Cursor from './sprites/ui/Cursor'
import QuickBar from './sprites/ui/QuickBar'




const UnitTypes = {
  Butcher: Butcher,
  Office: Office,
  Rock: Rock,
  ConveyorEast: ConveyorEast,
  ConveyorNorth: ConveyorNorth,
  ConveyorSouth: ConveyorSouth,
  ConveyorWest: ConveyorWest,
  LoaderEast: LoaderEast,
  LoaderWest: LoaderWest
};

import { toGridPos, intersects, containsPoint, containsRect, rectCrossesVerticalLine, rectCrossesHorizontalLine } from './Utils'

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
    this.quickBar.setSlot(0,UnitTypes.Butcher);
    this.quickBar.setSlot(1,UnitTypes.Office);
    this.quickBar.setSlot(2,UnitTypes.ConveyorEast);
    this.quickBar.setSlot(3,UnitTypes.ConveyorSouth);
    this.quickBar.setSlot(4,UnitTypes.ConveyorNorth);
    this.quickBar.setSlot(5,UnitTypes.ConveyorWest);
    this.quickBar.setSlot(6,UnitTypes.LoaderEast);
    this.quickBar.setSlot(7,UnitTypes.LoaderWest);

    this.infoWindow = new InfoWindow(undefined, this);

    this.userInput.onLeftClick(this.leftClicked.bind(this));

    this.userInput.onRightClick(
      function(x,y){
        this.gridRightClicked(this.viewPort.toGridPos(x,y))
      }.bind(this)
    );

    this.userInput.onKey(KEY_BINDS.QUICKSLOT_1, (()=>{this.enablePlacementMode("Butcher")}).bind(this));
    this.userInput.onKey(KEY_BINDS.QUICKSLOT_2, (()=>{this.enablePlacementMode("Office")}).bind(this));
    this.userInput.onKey(KEY_BINDS.QUICKSLOT_3, (()=>{this.enablePlacementMode("ConveyorEast")}).bind(this));
    this.userInput.onKey(KEY_BINDS.QUICKSLOT_4, (()=>{this.enablePlacementMode("ConveyorSouth")}).bind(this));
    this.userInput.onKey(KEY_BINDS.QUICKSLOT_5, (()=>{this.enablePlacementMode("ConveyorNorth")}).bind(this));
    this.userInput.onKey(KEY_BINDS.QUICKSLOT_6, (()=>{this.enablePlacementMode("ConveyorWest")}).bind(this));
    this.userInput.onKey(KEY_BINDS.QUICKSLOT_7, (()=>{this.enablePlacementMode("LoaderEast")}).bind(this));
    this.userInput.onKey(KEY_BINDS.QUICKSLOT_8, (()=>{this.enablePlacementMode("LoaderWest")}).bind(this));

    this.bindCameraControls();

    this.userInput.onKey(KEY_BINDS.SHIFT, () => {this.shiftHeld = true});
    this.userInput.onKeyUp(KEY_BINDS.SHIFT, () => {this.shiftHeld = false});

    this.globalTime = 0;

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

  selectSprite(sprite, addToSelection=false) {
    if(!addToSelection){
      this.clearSelection();
    }
    sprite.select();
    this.infoWindow.sprite = sprite;
    this.addSprite(LAYERS.UI,this.infoWindow);
    this.selectedSprites.push(sprite);
  }

  tick(){
    this.globalTime ++;
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

  spriteAt(coords, countPlayer=false, onlyCheckLayer=[LAYERS.LAYER_AIR,LAYERS.LAYER_GROUND,LAYERS.LAYER_FLOOR]){
    var x = coords[0];
    var y = coords[1];

    var found = undefined;
    onlyCheckLayer.forEach((layer)=>{
      for (var i = this.layers[layer].length -1; i >= 0; i--) {
        var sprite = this.layers[layer][i];
        if(sprite.pos.x == x && sprite.pos.y == y){
          found = sprite;
        }
      }
    });

    if(found && !countPlayer && found.constructor.name === 'Player'){
      found = undefined;
    }
    return found;
  }

  spritesInRect(rect,layers=[LAYERS.LAYER_GROUND]){
    var containedSprites = [];

    containedSprites = containedSprites.concat(this.layers[layers[0]].filter((sprite)=>{
      // return containsPoint(rect, ...sprite.pixels.center);
      return containsRect(rect, sprite.pixels.boundingBox);
      // return intersects(rect, sprite.pixels.boundingBox);
    }));

    return containedSprites;
  }
  spritesCrossingVerticalLine(x,topY,bottomY,layers=[LAYERS.LAYER_GROUND]){
    var containedSprites = [];

    containedSprites = containedSprites.concat(this.layers[layers[0]].filter((sprite)=>{
      return rectCrossesVerticalLine(sprite.pixels.boundingBox, x, topY, bottomY);
    }));

    return containedSprites;
  }

  spritesCrossingHorizontalLine(y, leftX, rightX,layers=[LAYERS.LAYER_GROUND]){
    var containedSprites = [];

    containedSprites = containedSprites.concat(this.layers[layers[0]].filter((sprite)=>{
      return rectCrossesHorizontalLine(sprite.pixels.boundingBox, y, leftX, rightX);
    }));

    return containedSprites;
  }

  clearSelection(){
    if(this.selectedSprites){
      for (var i = 0; i < this.selectedSprites.length; i++) {
        var sprite = this.selectedSprites[i];
        sprite.unselect();
        this.removeSpriteFromLayer(this.layers[LAYERS.UI],this.infoWindow);
      }
    }
    this.selectedSprites = [];
    this.infoWindow.sprite = undefined;
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
    this.addSprite(unit.layer, unit);
  }

  gridRightClicked(coords){
    var clickedSprite = this.spriteAt(coords);
    if(this.actionMode!=='DEFAULT'){
      this.enableDefaultMode();
    }else{
      if(clickedSprite){
        this.selectSprite(clickedSprite);
        if(clickedSprite.fireAt){
          this.player.attackTarget(clickedSprite);
        }else if(clickedSprite.gather){
          this.player.attackTarget(clickedSprite);
        }else if(clickedSprite.collectAll){
          this.player.attackTarget(clickedSprite);
        }
      }
    }
  }

  removeSprite(sprite){
    if(sprite.selected){
      this.clearSelection();
    }
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
      if(!sprite.beingPlaced){
        sprite.tick(this.world);
      }
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
