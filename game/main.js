'use strict';

//global variables
var FlappyGame;

(function (FlappyGame) {
  function Game() {

  }
}) (FlappyGame || (FlappyGame={}));

window.onload = function () {
  var game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-bird-reborn');

  // Game States
  // game.state.add('boot', require('./states/boot'));
  // game.state.add('gameover', require('./states/gameover'));
  // game.state.add('menu', require('./states/menu'));
  // game.state.add('play', require('./states/play'));
  // game.state.add('preload', require('./states/preload'));
  game.state.add('boot', new Boot());

  game.state.start('boot');
};