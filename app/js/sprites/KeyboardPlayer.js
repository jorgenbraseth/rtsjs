import Unit from './KeyboardControlledUnit'
import Blood from './decore/Blood'
import {GRID_SIZE, LAYER_FLOOR} from '../constants/GameConstants.js'
import {loadImage} from '../Utils'
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
    super(game, coords, 100, 1, 25/GRID_SIZE, 13/GRID_SIZE);

    this.resources = {
      wood: 0, stone: 0, food: 0, gold: 0
    };

    this.color="yellow";
    this.animAge = 0;
    this.moveCost = 10000;
    this.world = game.world;

    this.updateDirection();

    this.speed = 1/12;

    this.images = {
      SOUTH: [loadImage(Image), (CHOSEN_APPEARANCE[0]*(3*32)), (CHOSEN_APPEARANCE[1]*4*32), 32, 32],
      WEST: [loadImage(Image), (CHOSEN_APPEARANCE[0]*(3*32)), (CHOSEN_APPEARANCE[1]*4*32)+1 * 32, 32, 32],
      EAST: [loadImage(Image), (CHOSEN_APPEARANCE[0]*(3*32)), (CHOSEN_APPEARANCE[1]*4*32)+2 * 32, 32, 32],
      NORTH: [loadImage(Image), (CHOSEN_APPEARANCE[0]*(3*32)), (CHOSEN_APPEARANCE[1]*4*32)+3 * 32, 32, 32]
    };

    const drawHeight = GRID_SIZE*0.9;
    const drawWidth = GRID_SIZE*0.9;

    this.image = [...this.images["SOUTH"], (this.width/2)-(drawWidth/2),this.height-drawHeight,drawWidth,drawHeight]
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
    console.log(JSON.stringify(this.pixels));
    super.tick();

    this.dx = this.movingLeft ? -this.speed : this.movingRight ? this.speed : 0;
    this.dy = this.movingUp ? -this.speed : this.movingDown ? this.speed : 0;

    this.moveHorizontally(this.dx);

    this.moveVertically(this.dy);

    if(this.dx!=0 || this.dy !=0){
      this.ageTick();
      this.updateDirection();
    }

    this.gridPos = [this.pos.x,this.pos.y];
  }

  moveVertically(dy){
      this._y += dy;

      var collision = this.game.findCollision(this);
      if(collision!==undefined){
        if(this.movingUp){
          const stepBackInGridUnits = collision.boundingBox.bottom-this.boundingBox.top;
          this._y += stepBackInGridUnits/GRID_SIZE;
        }else if(this.movingDown){
          const stepBackInGridUnits = this.boundingBox.bottom-collision.boundingBox.top;
          this._y -= stepBackInGridUnits/GRID_SIZE;
        }
      }

      if(this._y <0){
        this._y = 0;
      }else if(this._y > this.game.worldSize[1]-1){
              this._y = this.game.worldSize[1]-1;
          }
      }

  moveHorizontally(dx){
      this._x += dx;

      var collision = this.game.findCollision(this);
      if(collision!==undefined){
        if(this.movingLeft){
          const stepBackInGridUnits = collision.boundingBox.right-this.boundingBox.left;
          this._x += stepBackInGridUnits/GRID_SIZE;
        }else if(this.movingRight){
          const stepBackInGridUnits = this.boundingBox.right-collision.boundingBox.left;
          this._x -= stepBackInGridUnits/GRID_SIZE;
        }
      }
      if(this._x <0){
        this._x = 0;
      }else if(this._x > this.game.worldSize[0]-1){
        console.log("Too far right!");
              this._x = this.game.worldSize[0]-1;
          }
      }

  get animFrame(){
    return parseInt(this.animAge / 5)
  }

  draw(screen, viewport) {
    super.draw(...arguments);
    screen.fillStyle = this.color;

    var drawWidth = GRID_SIZE*0.9;
    var drawHeight = GRID_SIZE*0.9;

    var currentImage = this.images[this.direction].concat([]);
    currentImage[1]+=this.animFrame*32;

    this.image = [...currentImage, (this.width/2)-(drawWidth/2),this.height-drawHeight,drawWidth,drawHeight];
    screen.drawImage(...this.image);

    if (this.selected) {
      this.drawHp(screen);
    }
  }

  updateDirection() {
    this.direction = "SOUTH";
    if (this.dy < 0) {
      this.direction = "NORTH";
    } else if (this.dx < 0) {
      this.direction = "WEST";
    } else if (this.dx > 0) {
      this.direction = "EAST";
    }
  }

  die() {
    super.die();
    this.game.addSprite(LAYER_FLOOR, new Blood(this.game, this.gridInfo.pos));
  }

}
