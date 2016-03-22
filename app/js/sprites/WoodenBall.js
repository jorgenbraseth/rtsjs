import Unit from './Unit'
import { GRID_SIZE } from '../constants/GameConstants.js'

import Image from '../../images/wood-tiles.png';


export default class WoodenBall extends Unit {

  constructor(game, coords=[0,0]){
    super(game,coords,100,1);

    this.width=25;
    this.moveCost = 10000;
    this.movingTo = [this.pos.x,this.pos.y];
    this.world = game.world;

    this.unselect();

    this.speed = .15;

    this.image = document.createElement("img");
    this.image.setAttribute('src', Image);

  }

  select(){
    super.select();
    this.color = "rgba(0,250,0,0.3)";
  }

  unselect(){
    super.unselect();
    this.color ="transparent";
  }

  draw(screen, viewport){
    screen.fillStyle = this.color;
    // this.drawMoveQueue(screen);

    screen.drawImage(
      this.image,
      170,85,70,75,
      this.grid2draw(this.pos.x)-this.width/2,this.grid2draw(this.pos.y)-this.width/2,
      this.width,this.width
    );

    var centerX = this.pos.x * GRID_SIZE + GRID_SIZE/2;
    var centerY = this.pos.y * GRID_SIZE + GRID_SIZE/2;
    screen.beginPath();
    screen.arc(centerX,centerY,this.width/2, 0,Math.PI*2);
    screen.closePath();
    screen.stroke();

    this.drawHp(screen);

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

  grid2draw(val){
    return val * GRID_SIZE + GRID_SIZE / 2;
  }

}
