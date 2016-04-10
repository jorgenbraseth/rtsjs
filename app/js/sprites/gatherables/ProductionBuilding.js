import Sprite from './../Sprite'

export default class ProductionBuilding extends Sprite {
  constructor(producesType, capacity, productionSpeed, game, coords=[0,0]){
    super(game, coords);

    this.startingResources = 0;
    this.resourceAmount = this.startingResources;
    this.resourceType = producesType;
    this.maxResourceAmount = capacity;
    this.productionProgress = 0;

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

    const indicatorPos = [this.width*0.05, 0];

    screen.save();
    screen.translate(...indicatorPos);


    const indicatorWidth = this.width * 0.9;
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

  gather(gatherAmount, gatherer){
    gatherer.resources[this.resourceType] = gatherer.resources[this.resourceType] || 0;
    gatherer.resources[this.resourceType] += this.resourceAmount;
    this.resourceAmount = 0;
    gatherer.targetOfAttack = undefined;
  }
}
