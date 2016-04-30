import Sprite from './../Sprite'

export default class ProductionBuilding extends Sprite {
  constructor(producesType, capacity, productionSpeed, resourcesNeeded=undefined, game, coords=[0,0], width, height){
    super(game, coords, width, height);

    this.startingResources = 0;
    this.resourceAmount = this.startingResources;
    this.resourceType = producesType;
    this.maxResourceAmount = capacity;
    this.productionProgress = 0;
    this.resourcesNeeded=resourcesNeeded;

    this.inputSlots = {
      food: 5
    };

    this.progressNeededToProduce = productionSpeed;
  }

  draw(screen){
    super.draw(screen);

    if(!this.beingPlaced){
      this.drawInventoryIndicator(screen);
    }
  }

  get progressPercent(){
    return this.productionProgress/this.progressNeededToProduce;
  }

  drawInventoryIndicator(screen){

    const indicatorPos = [this.pixels.width*0.05, 0];

    screen.save();
    screen.translate(...indicatorPos);


    const indicatorWidth = this.pixels.width * 0.9;
    const indicatorHeight = 5;

    screen.fillStyle = 'rgba(0,0,0,0.3';
    screen.fillRect(0,0,indicatorWidth,indicatorHeight+1);
    screen.translate(1,1);
    screen.fillStyle = 'rgba(250,200,0,0.9)';
    screen.fillRect(0,0,indicatorWidth * this.progressPercent, 1);
    screen.translate(0,2);

    const widthPerBox = ((indicatorWidth-1)-this.maxResourceAmount)/this.maxResourceAmount;
    for (var res = 0; res < this.resourceAmount; res++) {
      screen.fillRect((res*widthPerBox)+(res),0,widthPerBox,indicatorHeight-2);
    }

    screen.restore();
  }

  tick(){
    if(!this.beingPlaced){
      if(this.resourceAmount < this.maxResourceAmount){
        this.productionProgress++;
      }

      if(this.productionProgress >= this.progressNeededToProduce){
        this.resourceAmount++;
        this.productionProgress -= this.progressNeededToProduce;
      }
    }
  }

  collectAll(gatherer){
    this.collect(this.resourceAmount, gatherer);
  }

  collect(gatherAmount, gatherer){
    if(gatherAmount > this.resourceAmount){
      gatherAmount = this.resourceAmount;
    }
    if(gatherAmount > 0){
      gatherer.giveResource(this.resourceType, gatherAmount);
      this.resourceAmount -= gatherAmount;
    }
    gatherer.targetOfAttack = undefined;
  }

  get details(){
    return { ...super.details,
      output: {
        type: this.resourceType,
        amount: this.resourceAmount
      },
      progress: this.progressPercent,
      input: this.resourcesNeeded ? this.resourcesNeeded.map((i)=>{return {...i, amount: this.inputSlots[i.type]}}):undefined
    }
  }
}
