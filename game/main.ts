/// <reference path="../bower_components/phaser/typescript/phaser.d.ts" />
'use strict';

module FlappyBird {
  export class Game extends Phaser.Game {
    constructor() {
      console.log("main");
      super(288, 505, Phaser.AUTO, 'flappy-bird-reborn');
      // Game States
      // this.state.add('boot', require('./states/boot'));
      // this.state.add('gameover', require('./states/gameover'));
      // this.state.add('menu', require('./states/menu'));
      // this.state.add('play', require('./states/play'));
      // this.state.add('preload', require('./states/preload'));
      this.state.add('boot', Boot, false);
      this.state.add('gameover', Gameover, false);
      this.state.add('menu', Menu, false);
      this.state.add('play', Play, false);
      this.state.add('preload', Preload, false);

      console.log(this.state.states);

      this.state.start('boot');
    }
  }
}
//global variables
window.onload = function() {
  //var game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-bird-reborn');
  //game.state.start('boot');
  var game = new FlappyBird.Game();
};