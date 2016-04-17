import { GRID_SIZE, LAYERS } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'

import Sprite from './../Sprite'
import TreeStump from './../decore/TreeStump'
import InfoWindow from './../ui/InfoWindow'

import Image from '../../../images/trees2.png'

const VARIANTS = [
  {x: 385, y:14, w:86, h:143, cX:0, cY:GRID_SIZE-65},
  {x: 515, y:332, w:53, h:88, cX:0, cY:GRID_SIZE-65},
  {x: 268, y:14, w:93, h:153, cX:0, cY:GRID_SIZE-65},
  {x: 547, y:139, w:103, h:172, cX:0, cY:GRID_SIZE-65},
  {x: 27, y:281, w:101, h:168, cX:0, cY:GRID_SIZE-65},
  {x: 353, y:311, w:57, h:95, cX:0, cY:GRID_SIZE-65},
  {x: 155, y:145, w:87, h:145, cX:0, cY:GRID_SIZE-65}
];

export default class Tree extends Sprite {

  constructor(game, coords=[0,0]){
    super(game, coords);
    this.startingResources = 15;
    this.resourceAmount = this.startingResources;
    this.moveCost = 10000;

    this.gatherHealth = 4;
    this.gatherProgress = 0;

    this.color = "rgba(0,150,0,0.5)";
    this.depleted = false;
    this.resourceType = "wood";

    this.infoWindow = new InfoWindow(this, this.game);

    this.variant = VARIANTS[parseInt(Math.random()*VARIANTS.length)];
    this.image = [
      loadImage(Image),
      this.variant.x,this.variant.y,this.variant.w,this.variant.h,
      (GRID_SIZE/2)-(40/2),GRID_SIZE-65,40,65
    ];

  }

  gather(gatherAmount, gatherer){
    this.gatherProgress += gatherAmount;
    var gathered = 0;
    if(this.gatherProgress > this.gatherHealth){
      this.gatherProgress -= this.gatherHealth;
      gathered = 1;
    }
    this.resourceAmount -= gathered;

    gatherer.resources[this.resourceType] = gatherer.resources[this.resourceType] || 0;
    gatherer.resources[this.resourceType] += gathered;

    if(this.resourceAmount <= 0){
      this.deplete();
      gatherer.killed(this);
    }
  }

  deplete() {
    this.game.removeSprite(this);
    this.depleted = true;
    this.game.addSprite(LAYERS.LAYER_FLOOR, new TreeStump(this.game, this.gridInfo.pos))
  }

  get details(){
    return {...super.details,
      output: {
        type: this.resourceType,
        amount: this.resourceAmount
      },
      progress: 1-this.gatherProgress/this.gatherHealth
    }
  }
}
