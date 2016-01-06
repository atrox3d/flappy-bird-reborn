'use strict';

module FlappyBird {

  export class Ground extends Phaser.TileSprite {

    constructor(game, x, y, width, height) {
      super(game, x, y, width, height, 'ground');

      this.game.physics.arcade.enableBody(this);
    }

    update() {
    // write your prefab's specific update code here
    }
  }
}
// module.exports = Bird;
