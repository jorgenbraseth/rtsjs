import Sprite from './Sprite'
import AStar from '../AStar'


export default class Unit extends Sprite {

  constructor(game, coords=[0,0], hp){
    super(game,coords);
    this.hp = hp;
    this.attackRange = 1.5;
  }

  moveTo(coords){
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
    this.moveTowardsTarget();


  }

  moveTowardsTarget() {
    this.moving = !(this.pos.x === this.targetX && this.pos.y === this.targetY);
    if(!this.moving){
      this.calculatePath();
      var nextPos = this.moveQueue.shift();
    }

    if(!this.moving){
      this.moveQueue.shift();
    }

    if(!this.moving && this.moveQueue.length > 0){
      let nextPos = this.moveQueue.shift();
      this.targetX = nextPos.x;
      this.targetY = nextPos.y;
    }

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

  attackTarget(unit) {
    console.log("Attacking: "+unit.constructor.name+" @ "+unit.pos.x+","+unit.pos.y);

    this.targetOfAttack = unit;
  }
}
