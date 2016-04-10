import Unit from './KeyboardControlledUnit'
import Blood from './decore/Blood'
import {GRID_SIZE, LAYER_FLOOR} from '../constants/GameConstants.js'
import {loadImage, toGridPos} from '../Utils'
// import Image from '../../images/person1.png';
import Image from '../../images/player_sprites.png';



const PLAYER_TYPES = {
  OLD_MAN: [0,0],
  YOUNG_MAN: [1,0],
  PIRATE: [2,0],
  RED_GIRL: [3,0],
  WIZARD: [0,1],
  SCIENTIST: [1,1],
  BLUE_MAN: [2,1],
  RED_GIRL2: [3,1]
};

const types = Object.keys(PLAYER_TYPES);
const randomPick = Math.floor(Math.random()*types.length);
const CHOSEN_APPEARANCE = PLAYER_TYPES[types[randomPick]];

export default class Player extends Unit {

  constructor(game, coords = [0, 0]) {
    super(game, coords, 100, 1);

    this.resources = {
      wood: 0, stone: 0, food: 0, gold: 0
    };
    this.animAge = 0;
    this.width = 25;
    this.height = 13;
    this.drawWidth = GRID_SIZE * 0.9;
    this.drawHeight = GRID_SIZE * 0.9;
    this.moveCost = 10000;
    this.world = game.world;

    this.updateDirection();

    this.speed = 1/12;

    this.image = loadImage(Image);
  }

  select() {
    super.select();
    this.color = "rgba(0,250,0,0.3)";
  }

  unselect() {
    super.unselect();
    this.color = "transparent";
  }

  moveRight(startMovement) {
    this.movingRight = startMovement;
  }

  moveLeft(startMovement) {
    this.movingLeft = startMovement;
  }

  moveUp(startMovement) {
    this.movingUp = startMovement;
  }

  moveDown(startMovement) {
    this.movingDown = startMovement;
  }

  ageTick() {
    this.animAge = (this.animAge + 1) % 15;
  }

  tick() {
    super.tick();

    this.dx = this.movingLeft ? -this.speed : this.movingRight ? this.speed : 0;
    this.dy = this.movingUp ? -this.speed : this.movingDown ? this.speed : 0;

    this.pos.x += this.dx;

    var collision = this.game.findCollision(this);
    if(collision!==undefined){
      if(this.movingLeft){
        const stepBackInGridUnits = collision.boundingBox.right-this.boundingBox.left;
        this.pos.x += stepBackInGridUnits/GRID_SIZE;
      }else if(this.movingRight){
        const stepBackInGridUnits = this.boundingBox.right-collision.boundingBox.left;
        this.pos.x -= stepBackInGridUnits/GRID_SIZE;
      }
    }
    if(this.pos.x <0){
      this.pos.x = 0;
    }else if(this.pos.x > this.game.worldSize[0]-1){
      this.pos.x = this.game.worldSize[0]-1;
    }

    this.pos.y += this.dy;

    var collision = this.game.findCollision(this);
    if(collision!==undefined){
      if(this.movingUp){
        const stepBackInGridUnits = collision.boundingBox.bottom-this.boundingBox.top;
        this.pos.y += stepBackInGridUnits/GRID_SIZE;
      }else if(this.movingDown){
        const stepBackInGridUnits = this.boundingBox.bottom-collision.boundingBox.top;
        this.pos.y -= stepBackInGridUnits/GRID_SIZE;
      }
    }

    if(this.pos.y <0){
      this.pos.y = 0;
    }else if(this.pos.y > this.game.worldSize[1]-1){
      this.pos.y = this.game.worldSize[1]-1;
    }

    if(this.dx!=0 || this.dy !=0){
      this.ageTick();
      this.updateDirection();
    }

    this.gridPos = [this.pos.x,this.pos.y];
  }

  draw(screen, viewport) {
    super.draw(...arguments);
    screen.fillStyle = this.color;

    var animFrame = parseInt(this.animAge / 5);

    screen.drawImage(
      this.image,
      (CHOSEN_APPEARANCE[0]*(3*32)) + (animFrame * 32), (CHOSEN_APPEARANCE[1]*4*32)+this.directionRow * 32, 32, 32,
      // 0,0,32,32,
      (this.width/2)-(this.drawWidth/2),this.height-this.drawHeight,this.drawWidth,this.drawHeight
    );

    if (this.selected) {
      this.drawHp(screen);
    }


  }

  updateDirection() {
    this.directionRow = 0;
    if (this.dy < 0) {
      this.directionRow = 3;
    } else if (this.dx < 0) {
      this.directionRow = 1;
    } else if (this.dx > 0) {
      this.directionRow = 2;
    }
  }

  die() {
    super.die();
    this.game.addSprite(LAYER_FLOOR, new Blood(this.game, this.gridInfo.pos));
  }

}
