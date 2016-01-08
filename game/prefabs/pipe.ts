'use strict';

module FlappyBird {

  export class Pipe extends Phaser.TileSprite {

    constructor(game, x, y, frame) {
      super(game, x, y, x, y, 'pipe', frame);

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
