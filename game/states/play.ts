
'use strict';
module FlappyBird {

  export class Play extends Phaser.State {
    background: Phaser.Sprite;
    create() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y=500;

      this.background = this.game.add.sprite(0, 0, 'background');
    }

    update() {

    }

    clickListener() {
    }
  }
}
  // module.exports = Play;