import Sprite from './Sprite'
import AStar from '../AStar'
import { GRID_SIZE } from '../constants/GameConstants.js'


export default class Unit extends Sprite {

  constructor(game, coords=[0,0], hp, attackDamage=0){
    super(game,coords);
    this.hp = hp;
    this.initialHp = hp;
    this.attackRange = 2.5;
    this.attackDamage = attackDamage;
    this.dead = false;
    this.moveCost = 1;
  }

  moveTo(coords){
    this.targetOfAttack = undefined;
    this.movingTo = coords;
  }

  calculatePath(){
    this.moveQueue = [[this.targetX,this.targetY]];
    var myPos = [this.targetX,this.targetY];
    var path = AStar.findPath(this.world, myPos,this.movingTo);

    for (var pos = 0; pos < path.length; pos++) {
      var coords = path[pos];
      this.moveQueue.push({
        x: coords[0],
        y: coords[1]
      })
    }
  }

  tick(){
    this.firedThisRound = false;
    if(this.targetOfAttack && this.targetOfAttack.dead == true){
      this.targetOfAttack = undefined;
      this.moveTo([this.pos.x,this.pos.y]);
    }

    if(this.targetOfAttack && this.inAttackRange(this.targetOfAttack)){
      this.fireAt(this.targetOfAttack);
      if(this.targetOfAttack.dead){
        this.targetOfAttack = undefined;
      }
    }else{
      if(this.targetOfAttack){
        this.movingTo = [this.targetOfAttack.pos.x, this.targetOfAttack.pos.y];
        this.calculatePath();
      }
      this.moveTowardsTarget();
    }
  }

  inAttackRange(unit){
    var posOfTarget = unit.pos;
    var dx = Math.abs(this.pos.x - posOfTarget.x);
    var dy = Math.abs(this.pos.y - posOfTarget.y);

    var rangeToTarget = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
    return rangeToTarget <= this.attackRange;
  }

  takeDamage(damage){
    this.hp -= damage;
    if(this.hp <= 0){
      this.die();
    }
  }

  fireAt(unit){
    unit.takeDamage(this.attackDamage);
    this.firedThisRound = true;
  }

  die(){
    console.log("I'm dead!");
    this.dead = true;
    this.game.removeSprite(this);
  }

  draw(screen){
    super.draw(screen);

    if(this.firedThisRound && this.targetOfAttack){
      screen.beginPath();
      screen.moveTo(this.pos.centerPixelX(),this.pos.centerPixelY());
      screen.lineTo(this.targetOfAttack.pos.centerPixelX(),this.targetOfAttack.pos.centerPixelY());
      screen.closePath();
      screen.stroke();
    }
  }
  drawHp(screen){
    screen.fillStyle = "rgba(0,250,0,1)";
    screen.fillRect(
      this.pos.x*GRID_SIZE+3,
      this.pos.y*GRID_SIZE+3,
      (GRID_SIZE-6)*(this.hp/this.initialHp),
      5
    )
  }

  moveTowardsTarget() {
    this.moving = !(this.pos.x === this.targetX && this.pos.y === this.targetY);
    if(!this.moving){
      this.calculatePath();
      this.moveQueue.shift();
    }

    if(!this.moving){
      this.moveQueue.shift();
    }

    if(!this.moving && this.moveQueue.length > 0){
      let nextPos = this.moveQueue.shift();
      this.targetX = nextPos.x;
      this.targetY = nextPos.y;
    }

    if(this.game.positionFree(this.targetX,this.targetY)){
      let distX = this.targetX - this.pos.x;
      let distY = this.targetY - this.pos.y;
      let dist = Math.sqrt(distX*distX + distY*distY);

      if(dist>0) {
        let sinA = distY / dist;
        let cosA = distX / dist;

        this.dx = cosA * Math.min(this.speed,dist);
        this.dy = sinA * Math.min(this.speed,dist);

        this.pos.x += this.dx;
        this.pos.y += this.dy;
      }
    }


  }

  attackTarget(unit) {
    this.targetOfAttack = unit;
  }
}