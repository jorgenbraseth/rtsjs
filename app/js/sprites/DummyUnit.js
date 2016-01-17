import Sprite from './Sprite.js'
import { GRID_SIZE } from '../constants/GameConstants.js'

import AStar from '../AStar'

import Image from '../../images/wood-tiles.png';


export default class SelectableUnit extends Sprite {

  constructor(game, x=1, y=1){
    super(game,x,y);

    this.pos.x = x;
    this.pos.y = y;
    this.moveCost = 2;
    this.movingTo = [this.pos.x,this.pos.y];
    this.world = game.world;

    this.unselect();

    this.speed = .5 + Math.random()*0.5;

    game.clickMonitor.onRightClick(function(x,y){
      if(this.selected){
        var gridX = Math.floor(x / GRID_SIZE);
        var gridY = Math.floor(y / GRID_SIZE);
        this.moveTo(gridX,gridY);

      }

    }.bind(this));

    this.image = document.createElement("img");
    this.image.setAttribute('src', Image);

  }

  select(){
    super.select();
    this.color = "rgba(0,250,0,0.5)";
  }

  unselect(){
    super.unselect();
    this.color ="transparent";
  }
  moveTo(x,y){
    this.movingTo = [x,y];

    //this.moveQueue.push(nextPos);
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
    this.calculatePath();


    this.moving = !(this.pos.x === this.targetX && this.pos.y === this.targetY);
    if(!this.moving){
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

  draw(screen){

    screen.fillStyle = this.color;
    this.drawMoveQueue(screen);
    super.draw(screen);

    screen.drawImage(
      this.image,
      170,85,70,75,
      this.grid2draw(this.pos.x)-this.width/2,this.grid2draw(this.pos.y)-this.width/2,
      this.width,this.width
    )


  }
  drawMoveQueue(screen){
    for (var i = 0; i < this.moveQueue.length; i++) {
      var pos = this.moveQueue[i];
      screen.beginPath();
      screen.arc(this.grid2draw(pos.x),this.grid2draw(pos.y),3,0,Math.PI*2);
      screen.closePath();
      screen.fill();
    }



  }

  grid2draw(val){
    return val * GRID_SIZE + GRID_SIZE / 2;
  }

}
