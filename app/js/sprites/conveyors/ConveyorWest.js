import Sprite from './../Sprite'
import {LAYERS} from '../../constants/GameConstants.js'

import { loadImage } from '../../Utils'

import Image from '../../../images/ConveyorBeltSprite_Red.png'

export default class ConveyorWest extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords);

    this.images = [
      [loadImage(Image),0,64,32,32,0,0,this.pixels.width,this.pixels.height],
      [loadImage(Image),32,64,32,32,0,0,this.pixels.width,this.pixels.height],
      [loadImage(Image),64,64,32,32,0,0,this.pixels.width,this.pixels.height]
    ];
    this.image = this.images[0];
    this.pushSpeed = .03;

    this.cost = {
      stone: 3, wood: 5,
      gold: 1
    };
  }

  get layer(){
    return LAYERS.LAYER_FLOOR;
  }

  get areaOfInfluence(){
    return this.pixels.boundingBox;
  }


  tick(){
    this.image = this.images[Math.floor(this.game.globalTime/7)%3];

    const movingOut = this.game.spritesCrossingVerticalLine(this.areaOfInfluence.left, this.areaOfInfluence.top, this.areaOfInfluence.bottom);
    movingOut.forEach((toMove)=>{
      if(toMove.moveHorizontally){
        toMove.moveHorizontally(-this.pushSpeed);
      }
    });

    const onMySpot = this.game.spritesInRect(this.areaOfInfluence);
    onMySpot.forEach((toMove)=>{
      if(toMove.moveHorizontally){
        toMove.moveHorizontally(-this.pushSpeed);
      }
    });

  }
}
