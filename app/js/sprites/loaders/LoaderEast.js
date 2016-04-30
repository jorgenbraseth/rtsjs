import Sprite from './../Sprite'
import Food from './../materials/Food'
import Gold from './../materials/Gold'

import {LAYERS} from '../../constants/GameConstants.js'

import { loadImage } from '../../Utils'

import Image from '../../../images/dqRFl.png'

const TRANSPORT_TIME = 50;

export default class LoaderEast extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords);

    this.image = [loadImage(Image),192,192,32,32,0,0,this.pixels.width,this.pixels.height];
    this.ticksSinceLastMove = 0;

    this.cost = {
      wood: 2
    };
  }

  get layer(){
    return LAYERS.LAYER_GROUND;
  }

  get loadableSprite(){
    var spritesInRect = this.game.spritesInRect(this.loadFromArea());
    for (var i = 0; i < spritesInRect.length; i++) {
      var sprite = spritesInRect[i];
      if(sprite.collect){
        return sprite;
      }
    }
    return undefined;
  }

  loadFromArea(){
    return {...this.pixels.boundingBox,
      left: this.pixels.boundingBox.left-this.pixels.width,
      right: this.pixels.boundingBox.right-this.pixels.width
    };
  }

  loadToArea(){
    return {...this.pixels.boundingBox,
      left: this.pixels.boundingBox.left+this.pixels.width,
      right: this.pixels.boundingBox.right+this.pixels.width
    };
  }

  tick(){
    super.tick();
    if(this.ticksSinceLastMove > TRANSPORT_TIME && this.game.spritesInRect(this.loadToArea()).length === 0){
      var loadableSprite = this.loadableSprite;
      if(loadableSprite != undefined ){
        loadableSprite.collect(1,this);
        this.ticksSinceLastMove = 0;
      }
    }

    this.ticksSinceLastMove+=1;
  }

  giveResource(type, amount){
    if(type==="food"){
      var food = new Food(this.game, [this.gridPos[0]+1, this.gridPos[1]]);
      this.game.addSprite(food.layer,food);
    }else if(type==="gold"){
      var gold = new Gold(this.game, [this.gridPos[0]+1, this.gridPos[1]]);
      this.game.addSprite(gold.layer,gold);
    }

  }
}

