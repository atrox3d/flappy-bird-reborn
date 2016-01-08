'use strict';

module FlappyBird {

  export class Pipe extends Phaser.Sprite {

    constructor(game, x, y, frame) {
      super(game, x, y, 'pipe', frame);

      this.anchor.setTo(0.5, 0.5);

      this.game.physics.arcade.enableBody(this);

      this.body.allowGravity = false;
      this.body.immovable = true;
    }

    update() {
    // write your prefab's specific update code here
    }
  }
}
// module.exports = Bird;
