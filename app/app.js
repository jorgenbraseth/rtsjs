import './images/grass.jpg'
import './css/rts.css';

import Game from './js/Game';

var canvas = document.getElementById('game');

let game = new Game(canvas);
game.run();
