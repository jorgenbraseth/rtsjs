import Unit from './Unit'
import Blood from './decore/Blood'
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

    this.speed = .15;

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

  moveRight(startMovement){
    this.movingLeft=false;
    this.movingRight=startMovement;
  }
  moveLeft(startMovement){
    this.movingRight=false;
    this.movingLeft=startMovement;
  }
  moveUp(startMovement){
    this.movingDown=false;
    this.movingUp=startMovement;
  }
  moveDown(startMovement){
    this.movingUp=false;
    this.movingDown=startMovement;
  }

  tick() {
    super.tick();

    if(this.isMoving){
      this.animAge = (this.animAge+1)%15;
    }else if(this.movingLeft){
      this.moveTo([this.gridPos[0]-1,this.gridPos[1]])
    }else if(this.movingRight){
      this.moveTo([this.gridPos[0]+1,this.gridPos[1]])
    }else if(this.movingUp){
      this.moveTo([this.gridPos[0],this.gridPos[1]-1])
    }else if(this.movingDown){
      this.moveTo([this.gridPos[0],this.gridPos[1]+1])
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
      0,0,
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
      screen.arc(0,0,3,0,Math.PI*2);
      screen.closePath();
      screen.fill();

      screen.strokeStyle = "rgba(0,50,0,0.7)";
      screen.beginPath();
      screen.moveTo(0, 0);
      screen.lineTo(0, 0);
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
