import Sprite from './Sprite'

export default class Conveyor extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords, 1, 1);

    this.pushSpeed = .05;
  }

  tick(){

  }
}
