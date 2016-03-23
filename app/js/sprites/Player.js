import Unit from './Unit'
import Blood from './Blood'
import { GRID_SIZE, LAYER_FLOOR } from '../constants/GameConstants.js'
import { loadImage } from '../Utils'
import Image from '../../images/person1.png';


const PLAYER_TYPE_MAN = 0;
const PLAYER_TYPE_WOMAN_1 = 1;
const PLAYER_TYPE_WOMAN_2 = 2;

export default class Player extends Unit {

  constructor(game, coords=[0,0]){
    super(game,coords,100,1);

    this.resources = {};
    this.animAge = 0;
    this.width=GRID_SIZE*0.9;
    this.moveCost = 10000;
    this.movingTo = [this.pos.x,this.pos.y];
    this.world = game.world;

    this.unselect();

    this.speed = .08;

    this.image = loadImage(Image);
  }

  select(){
    super.select();
    this.color = "rgba(0,250,0,0.3)";
  }

  unselect(){
    super.unselect();
    this.color ="transparent";
  }

  tick() {
    super.tick();

    if(this.moving){
      this.animAge = (this.animAge+1)%15;
    }
  }
  draw(screen, viewport){
    screen.fillStyle = this.color;
    // this.drawMoveQueue(screen);

    var animFrame = parseInt(this.animAge/5);
    var directionRow = 0;
    var playerType = PLAYER_TYPE_MAN;

    if(this.dy < 0){
      directionRow = 3;
    }else if(this.dx < 0){
      directionRow = 1;
    }else if(this.dx > 0){
      directionRow = 2;
    }

    screen.drawImage(
      this.image,
      playerType*(3*32)+animFrame*32,directionRow*32,32,32,
      this.grid2draw(this.pos.x)-this.width/2,this.grid2draw(this.pos.y)-this.width/2,
      this.width,this.width
    );

    if(this.selected){
      this.drawHp(screen);
    }


  }
  drawMoveQueue(screen){
    var prevPos = this.pos;
    for (var i = 0; i < this.moveQueue.length; i++) {
      var pos = this.moveQueue[i];
      screen.fillStyle = "rgba(0,5,0,0.5";
      screen.beginPath();
      screen.arc(this.grid2draw(pos.x),this.grid2draw(pos.y),3,0,Math.PI*2);
      screen.closePath();
      screen.fill();

      screen.strokeStyle = "rgba(0,50,0,0.7)";
      screen.beginPath();
      screen.moveTo(this.grid2draw(prevPos.x), this.grid2draw(prevPos.y));
      screen.lineTo(this.grid2draw(pos.x), this.grid2draw(pos.y));
      screen.closePath();
      screen.stroke();

      prevPos = pos;
    }

  }

  die() {
    super.die();
    this.game.addSprite(LAYER_FLOOR, new Blood(this.game, [this.pos.x,this.pos.y]));
  }

}
