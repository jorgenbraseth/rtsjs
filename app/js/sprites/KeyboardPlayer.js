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
      wood: 30, stone: 0, food: 0, gold: 0
    };

    this.dx = 0;
    this.dy = 0;
    this.color="yellow";
    this.animAge = 0;
    this.world = game.world;

    this.updateDirection();

    this.gatheringSpeed = .25;
    this.speed = 1/8;

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
    this.movingRightMode = startMovement;
  }

  moveLeft(startMovement) {
    this.movingLeftMode = startMovement;
  }

  moveUp(startMovement) {
    this.movingUpMode = startMovement;
  }

  moveDown(startMovement) {
    this.movingDownMode = startMovement;
  }

  get movingDown(){
    return this.dy > 0;
  }
  get movingUp(){
    return this.dy < 0;
  }
  get movingRight(){
    return this.dx > 0;
  }
  get movingLeft(){
    return this.dx < 0;
  }

  ageTick() {
    this.animAge = (this.animAge + 1) % 15;
  }

  tick() {
    super.tick();

    this.dx = this.movingLeftMode ? -this.speed : this.movingRightMode ? this.speed : 0;
    this.dy = this.movingUpMode ? -this.speed : this.movingDownMode ? this.speed : 0;

    if(this.dx){
      this.moveHorizontally(this.dx);
      this.invalidatePixels();
    }
    if(this.dy){
      this.moveVertically(this.dy);
      this.invalidatePixels();
    }

    if(this.dx!=0 || this.dy !=0){
      this.ageTick();
      this.invalidatePixels();
      this.updateDirection();
      this.invalidatePixels();
    }

    this.gridPos = [this.pos.x,this.pos.y];
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

    this.image = [...currentImage, (this.pixels.width/2)-(drawWidth/2),this.pixels.height-drawHeight,drawWidth,drawHeight];
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
