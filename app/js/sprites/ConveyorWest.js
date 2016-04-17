import Sprite from './Sprite'
import {LAYERS} from '../constants/GameConstants.js'

import { loadImage } from '../Utils'

import Image from '../../images/ConveyorBeltSprite_Red.png'

export default class ConveyorWest extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords);

    this.images = [
      [loadImage(Image),0,64,32,32,0,0,this.pixels.width,this.pixels.height],
      [loadImage(Image),32,64,32,32,0,0,this.pixels.width,this.pixels.height],
      [loadImage(Image),64,64,32,32,0,0,this.pixels.width,this.pixels.height]
    ];
    this.image = this.images[0];
    this.pushSpeed = .05;

    this.cost = {
      stone: 5,
      gold: 1
    };
  }

  get layer(){
    return LAYERS.LAYER_FLOOR;
  }

  get areaOfInfluence(){
    return {
      left: this.pixels.boundingBox.left-this.pixels.width/2-5,
      right: this.pixels.boundingBox.right,
      bottom: this.pixels.boundingBox.bottom,
      top: this.pixels.boundingBox.top
    }
  }


  tick(){
    this.image = this.images[Math.floor(this.game.globalTime/7)%3];

    const onMySpot = this.game.spritesInRect(this.areaOfInfluence);
    onMySpot.forEach((toMove)=>{
      if(toMove.moveHorizontally){
        toMove.moveHorizontally(-this.pushSpeed);
      }
    });
  }
}
