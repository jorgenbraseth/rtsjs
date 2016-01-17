import { GRID_SIZE } from '../constants/GameConstants.js'

export default class Sprite {

  constructor(game, coords=[0,0]){
    this.game = game;
    this.pos = {x: coords[0], y: coords[1]};

    let red = Math.floor(Math.random() * 150)+100;
    let green = Math.floor(Math.random() * 150)+100;
    let blue = Math.floor(Math.random() * 150)+100;
    this.color = "rgba("+red+","+green+","+blue+",0.9)";

    this.width = 35;
    this.selected = false;

    this.speed = 0.2 + Math.random();

    this.dx = 1;
    this.dy = 1;


    this.targetX = this.pos.x;
    this.targetY = this.pos.y;

    this.moveQueue = [];

    this.moveCost = 0;
  }

  select(){
    this.selected = true;
  }

  unselect(){
    this.selected = false;
  }

   tick(){

   }

  draw(screen){
    screen.fillStyle = this.color;

    var centerX = this.pos.x * GRID_SIZE + GRID_SIZE/2;
    var centerY = this.pos.y * GRID_SIZE + GRID_SIZE/2;
    screen.fillRect(centerX - this.width/2,centerY - this.width/2 ,this.width,this.width);
  }
}
