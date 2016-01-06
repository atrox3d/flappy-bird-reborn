
'use strict';
module FlappyBird {

  export class Play extends Phaser.State {
    background: Phaser.Sprite;
    bird:FlappyBird.Bird;

    create() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y=500;

      this.background = this.game.add.sprite(0, 0, 'background');

      this.bird = new Bird(this.game, 100, this.game.height/2);
      this.game.add.existing(this.bird);
    }

    update() {

    }

    clickListener() {
    }
  }
}
  // module.exports = Play;