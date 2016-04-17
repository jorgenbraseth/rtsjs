import Sprite from './Sprite'
import AStar from '../AStar'
import { GRID_SIZE } from '../constants/GameConstants.js'

export default class Unit extends Sprite {

  constructor(game, coords=[0,0], hp, attackDamage=0, width, height){
    super(game,coords, width, height);
    this.hp = hp;
    this.initialHp = hp;
    this.gridPos = coords;
    this.attackRange = 1.5;
    this.attackDamage = attackDamage;
    this.gatheringSpeed = 0.25;
    this.dead = false;
  }

  get isMoving() {
    return true;
  }

  tick(){
    this.firedThisRound = false;
    if(this.targetOfAttack && this.targetOfAttack.dead == true){
      this.targetOfAttack = undefined;
    }

    if(this.targetOfAttack && this.inAttackRange(this.targetOfAttack)){
      if(this.targetOfAttack.fireAt){
        this.fireAt(this.targetOfAttack);
        this.firedThisRound = true;
      }else if(this.targetOfAttack.gather){
        this.gatherFrom(this.targetOfAttack);
        this.firedThisRound = true;
      }
    }
  }

  inAttackRange(unit){
    var posOfTarget = unit.gridInfo.pos;
    var dx = Math.abs(this.gridInfo.pos[0] - posOfTarget[0]);
    var dy = Math.abs(this.gridInfo.pos[1] - posOfTarget[1]);

    var rangeToTarget = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
    return rangeToTarget <= this.attackRange;
  }

  takeDamage(damage, attacker){
    this.hp -= damage;
    if(this.hp <= 0){
      this.die();
      attacker.killed(this);
    }
  }

  killed(unit) {
    this.targetOfAttack = undefined;
  }

  fireAt(unit){
    unit.takeDamage(this.attackDamage, this);
    this.firedThisRound = true;
  }

  gatherFrom(resourceNode){
    resourceNode.gather(this.gatheringSpeed, this);
  }

  die(){
    console.log("I'm dead!");
    this.dead = true;
    this.game.removeSprite(this);
  }

  draw(screen, viewport){
    if(this.firedThisRound && this.targetOfAttack && this.drawLineToAttackTarget){
      screen.save();
      screen.translate(-this.drawInfo.centerPixelX(),-this.drawInfo.centerPixelY());
      screen.beginPath();
      screen.moveTo(this.drawInfo.centerPixelX(),this.drawInfo.centerPixelY());
      screen.lineTo(this.targetOfAttack.drawInfo.centerPixelX(),this.targetOfAttack.drawInfo.centerPixelY());
      screen.closePath();
      screen.stroke();
      screen.restore();
    }
  }

  drawHp(screen){
    var hpPercent = (this.hp/this.initialHp);
    if(hpPercent > 0.8){
      screen.fillStyle = "rgba(0,250,0,1)";
    }else if(hpPercent>.25){
      screen.fillStyle = "rgba(250,250,0,1)";
    }else{
      screen.fillStyle = "rgba(250,0,0,1)";
    }
    var drawWidth = GRID_SIZE*0.9;
    var drawHeight = GRID_SIZE*0.9;
    screen.fillRect(0,this.pixels.height-drawHeight,this.pixels.width*hpPercent,5);
  }

  set gridPos(coords) {
    this._gridPos = coords;
  }
  get gridPos() {
    return this._gridPos;
  }

  attackTarget(unit) {
    this.targetOfAttack = unit;
  }
}
