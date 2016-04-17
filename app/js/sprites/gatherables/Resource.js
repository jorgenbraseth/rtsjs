import Sprite from './../Sprite'
export default class Tree extends Sprite {

  constructor(game, coords=[0,0], resourceType, startingResources, workNeededToGather){
    super(game,coords);

    this.gatherProgress = 0;
    this.resourceType = resourceType;
    this.gatherHealth = workNeededToGather;
    this.startingResources = startingResources;
    this.resourceAmount = this.startingResources;
  }

  gather(gatherAmount, gatherer){
    this.gatherProgress += gatherAmount;
    var gathered = 0;
    while(this.gatherProgress > this.gatherHealth){
      this.gatherProgress -= this.gatherHealth;
      gathered += 1;
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
  }

  get depleted(){
    this.resourceAmount = 0;
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
