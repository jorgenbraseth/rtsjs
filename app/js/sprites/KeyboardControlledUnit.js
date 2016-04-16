import Sprite from './Sprite'
import AStar from '../AStar'
import { GRID_SIZE } from '../constants/GameConstants.js'

export default class Unit extends Sprite {

  constructor(game, coords=[0,0], hp, attackDamage=0){
    super(game,coords);
    this.hp = hp;
    this.initialHp = hp;
    this.gridPos = coords;
    this.attackRange = 1.5;
    this.attackDamage = attackDamage;
    this.gatheringSpeed = 0.25;
    this.dead = false;
    this.moveCost = 0;
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
    if(this.firedThisRound && this.targetOfAttack){
      screen.beginPath();

      screen.moveTo(this.drawWidth/2,this.drawHeight/2);
      screen.lineTo(this.targetOfAttack.drawInfo.centerPixelX(),this.targetOfAttack.drawInfo.centerPixelY());
      screen.closePath();
      screen.stroke();
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

    var dx = 0;
    var dy = 5;
    screen.translate(-dx,- dy);
    screen.fillRect(0,0,(GRID_SIZE)*hpPercent,5);
    screen.translate(dx,dy);
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
