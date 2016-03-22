import { GRID_SIZE } from '../constants/GameConstants.js'
import Sprite from './Sprite'


export default class Conveyor extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords);
    this.moveCost = 1;
    this.width = GRID_SIZE;

    this.pushSpeed = .05;
  }

  tick(){
    var spriteAtMyPos = this.game.spriteAt([this.pos.x,this.pos.y]);
    if(spriteAtMyPos){
      console.log("Should push " + spriteAtMyPos.constructor.name + " at " + JSON.stringify(this.pos));
    }

  }


  grid2draw(val){
    return val * GRID_SIZE + GRID_SIZE / 2;
  }
}
