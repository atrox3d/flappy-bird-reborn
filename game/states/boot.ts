
'use strict';

module FlappyBird {
  // function Boot() {
  // }

  // Boot.prototype = {
  export class Boot extends Phaser.State {
    preload() {
      console.log("boot");
      this.load.image('preloader', 'assets/preloader.gif');
    }

    create() {
      this.game.input.maxPointers = 1;
      this.game.state.start('preload');
    }

  }
}
  // module.exports = Boot;
//}
