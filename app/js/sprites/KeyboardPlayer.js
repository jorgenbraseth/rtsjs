import Unit from './KeyboardControlledUnit'
import Blood from './decore/Blood'
import {GRID_SIZE, LAYER_FLOOR} from '../constants/GameConstants.js'
import {loadImage, toGridPos} from '../Utils'
import Image from '../../images/person1.png';

const PLAYER_TYPE_MAN = 0;
const PLAYER_TYPE_WOMAN_1 = 1;
const PLAYER_TYPE_WOMAN_2 = 2;

const CHOSEN_APPEARANCE = PLAYER_TYPE_WOMAN_2;

export default class Player extends Unit {

  constructor(game, coords = [0, 0]) {
    super(game, coords, 100, 1);

    this.resources = {
      wood: 0, stone: 0, food: 0, gold: 0
    };
    this.animAge = 0;
    this.width = GRID_SIZE * 0.9;
    this.height = GRID_SIZE * 0.9;
    this.moveCost = 10000;
    this.world = game.world;

    this.speed = .125;

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

  tick() {
    super.tick();

    if (this.isMoving) {
      this.animAge = (this.animAge + 1) % 15;
    }

    const dx = this.movingLeft ? -this.speed : this.movingRight ? this.speed : 0;
    const dy = this.movingUp ? -this.speed : this.movingDown ? this.speed : 0;

    this.pos.x += dx;

    var collision = this.game.findCollision(this);
    if(collision!==undefined){
      if(this.movingLeft){
        const stepBack = collision.boundingBox.right-this.boundingBox.left;
        this.pos.x += stepBack;
      }else if(this.movingRight){
        const stepBack = this.boundingBox.right-collision.boundingBox.left;
        this.pos.x -= stepBack;
      }
    }
    if(this.pos.x <0){
      this.pos.x = 0;
    }

    this.pos.y += dy;

    var collision = this.game.findCollision(this);
    if(collision!==undefined){
      if(this.movingUp){
        const stepBack = collision.boundingBox.bottom-this.boundingBox.top;
        this.pos.y += stepBack;
      }else if(this.movingDown){
        const stepBack = this.boundingBox.bottom-collision.boundingBox.top;
        this.pos.y -= stepBack;
      }
    }

    if(this.pos.y <0){
      this.pos.y = 0;
    }

    this.gridPos = [Math.ceil(this.pos.x),Math.ceil(this.pos.y)];
  }

  draw(screen, viewport) {
    super.draw(...arguments);
    screen.fillStyle = this.color;

    var animFrame = parseInt(this.animAge / 5);
    var directionRow = 0;
    var playerType = CHOSEN_APPEARANCE;

    if (this.dy < 0) {
      directionRow = 3;
    } else if (this.dx < 0) {
      directionRow = 1;
    } else if (this.dx > 0) {
      directionRow = 2;
    }

    screen.drawImage(
      this.image,
      playerType * (3 * 32) + animFrame * 32, directionRow * 32, 32, 32,
      GRID_SIZE / 2 - this.width / 2, GRID_SIZE / 2 - this.height / 2,
      this.width, this.height
    );

    if (this.selected) {
      this.drawHp(screen);
    }


  }

  die() {
    super.die();
    this.game.addSprite(LAYER_FLOOR, new Blood(this.game, [this.pos.x, this.pos.y]));
  }

}
