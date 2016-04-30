import Sprite from './../Sprite'
import {LAYERS} from '../../constants/GameConstants.js'

import { loadImage } from '../../Utils'

import Image from '../../../images/ConveyorBeltSprite_Red.png'

export default class ConveyorNorth extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords);

    this.images = [
      [loadImage(Image),0,0,32,32,0,0,this.pixels.width,this.pixels.height],
      [loadImage(Image),32,0,32,32,0,0,this.pixels.width,this.pixels.height],
      [loadImage(Image),64,0,32,32,0,0,this.pixels.width,this.pixels.height]
    ];
    this.image = this.images[0];
    this.pushSpeed = .05;

    this.cost = {
      stone: 3,
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

    const movingOut = this.game.spritesCrossingHorizontalLine(this.areaOfInfluence.top, this.areaOfInfluence.left, this.areaOfInfluence.right);
    movingOut.forEach((toMove)=>{
      if(toMove.moveVertically){
        toMove.moveVertically(-this.pushSpeed);
      }
    });

    const onMySpot = this.game.spritesInRect(this.areaOfInfluence);
    onMySpot.forEach((toMove)=>{
      if(toMove.moveVertically){
        toMove.moveVertically(-this.pushSpeed);
      }
    });
  }
}
