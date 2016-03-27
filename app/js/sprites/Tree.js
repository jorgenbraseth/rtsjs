import { GRID_SIZE, LAYER_FLOOR } from '../constants/GameConstants.js'
import { loadImage } from '../Utils'

import Sprite from './Sprite'
import TreeStump from './TreeStump'

import Image from '../../images/trees2.png'

const VARIANTS = [
  {x: 385, y:14, w:86, h:143, cX:GRID_SIZE/2, cY:45},
  {x: 515, y:332, w:53, h:88, cX:GRID_SIZE/2, cY:45},
  {x: 268, y:14, w:93, h:153, cX:GRID_SIZE/2, cY:45},
  {x: 547, y:139, w:103, h:172, cX:GRID_SIZE/2, cY:45},
  {x: 27, y:281, w:101, h:168, cX:GRID_SIZE/2, cY:45},
  {x: 353, y:311, w:57, h:95, cX:GRID_SIZE/2, cY:45},
  {x: 155, y:145, w:87, h:145, cX:GRID_SIZE/2, cY:45}
];

export default class Tree extends Sprite {

  constructor(game, coords=[0,0]){
    super(game, coords);
    this.startingResources = 15;
    this.resourceAmount = this.startingResources;
    this.moveCost = 10000;
    this.width = GRID_SIZE;
    this.color = "black";
    this.depleted = false;

    this.variant = VARIANTS[parseInt(Math.random()*VARIANTS.length)];
    this.image = [loadImage(Image), this.variant.x,this.variant.y,this.variant.w,this.variant.h,-this.variant.cX,-this.variant.cY,40,65];

  }

  gather(gatherAmount, gatherer){
    var amountBeforeGather = parseInt(this.resourceAmount);
    this.resourceAmount -= gatherAmount;

    var amountAfterGather = parseInt(this.resourceAmount);
    gatherer.resources.wood = gatherer.resources.wood || 0;
    gatherer.resources.wood += (amountBeforeGather-amountAfterGather);

    if(this.resourceAmount <= 0){
      this.deplete();
      gatherer.killed(this);
    }
  }

  deplete() {
    this.game.removeSprite(this);
    this.depleted = true;
    this.game.addSprite(LAYER_FLOOR, new TreeStump(this.game, [this.pos.x,this.pos.y]))
  }
}
