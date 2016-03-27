import Sprite from './Sprite'
import AStar from '../AStar'
import { GRID_SIZE } from '../constants/GameConstants.js'

export default class Unit extends Sprite {

  constructor(game, coords=[0,0], hp, attackDamage=0){
    super(game,coords);
    this.hp = hp;
    this.initialHp = hp;
    this.gridPos = coords;
    this.attackRange = 1;
    this.attackDamage = attackDamage;
    this.gatheringSpeed = 0.25;
    this.dead = false;
    this.moveCost = 0;
  }

  moveTo(targetPosition){
    this.targetOfAttack = undefined;

    var newMoveQueue = [];
    if(this.nextGridPosition){
      newMoveQueue.push([this.nextGridPosition[0],this.nextGridPosition[1]]);
    }
    var startPoint = this.nextGridPosition || this.gridPos;
    this.moveQueue = newMoveQueue.concat([...this.calculatePath(startPoint,targetPosition)]);
  }

  calculatePath(start,end){
    console.log(JSON.stringify([start, end]));
    if(start==undefined || end==undefined){
      return [];
    }
    var calculatedPath = [];
    var path = AStar.findPath(this.world, start,end);

    for (var pos = 0; pos < path.length; pos++) {
      var coords = path[pos];
      calculatedPath.push(coords);
    }

    return calculatedPath;
  }

  get isMoving() {
    return this.nextGridPosition !== undefined;
  }

  tick(){
    this.firedThisRound = false;
    if(this.targetOfAttack && this.targetOfAttack.dead == true){
      console.log(1);
      this.targetOfAttack = undefined;
    }

    if(this.targetOfAttack && this.inAttackRange(this.targetOfAttack)){
      if(this.targetOfAttack.fireAt){
        this.fireAt(this.targetOfAttack);
        if(this.targetOfAttack.dead){
          this.targetOfAttack = undefined;
        }
      }else if(this.targetOfAttack.gather){
        this.gatherFrom(this.targetOfAttack);
        if(this.targetOfAttack.depleted){
          this.targetOfAttack = undefined;
        }
      }
    }else{
      if(this.targetOfAttack){
        const movingTo = [this.targetOfAttack.pos.x, this.targetOfAttack.pos.y];
        this.moveTo(movingTo)
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
      screen.moveTo(this.pos.centerPixelX(),this.pos.centerPixelY());
      screen.lineTo(this.targetOfAttack.pos.centerPixelX(),this.targetOfAttack.pos.centerPixelY());
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

    var dx = GRID_SIZE/2-3;
    var dy = GRID_SIZE/2+5;
    screen.translate(-dx,- dy);
    screen.fillRect(0,0,(GRID_SIZE-6)*hpPercent,5);
    screen.translate(dx,dy);
  }

  moveTowardsTarget() {
    if(this.nextGridPosition && !this.game.positionFree(this.nextGridPosition)){
      this.moveQueue = [];
    }

    if(this.nextGridPosition === undefined){
      return;
    }

    if(this.atPosition(this.nextGridPosition)){
      this.gridPos = [this.nextGridPosition[0],this.nextGridPosition[1]];
      this.moveQueue.shift();
    }else{
      let distX = this.nextGridPosition[0] - this.pos.x;
      let distY = this.nextGridPosition[1] - this.pos.y;
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

    if(this.nextGridPosition && !this.game.positionFree(this.nextGridPosition)){
      this.moveQueue = [];
      console.log("not free!");
    }
  }

  set gridPos(coords) {
    this._gridPos = coords;
  }
  get gridPos() {
    return this._gridPos;
  }

  get targetX() {
    if(this.nextGridPosition)
      return this.nextGridPosition[0];
    else
      return this.gridPos[0]
  }
  get targetY() {
    if(this.nextGridPosition)
      return this.nextGridPosition[1];
    else
      return this.gridPos[1]
  }

  get nextGridPosition() {
    return this.moveQueue[0] || undefined;
  }

  atPosition(pos) {
    return pos == undefined || (this.pos.x == pos[0] && this.pos.y == pos[1]);

  }


  attackTarget(unit) {
    // this.targetX = this.pos.x;
    // this.targetY = this.pos.y;
    this.targetOfAttack = unit;
  }
}
