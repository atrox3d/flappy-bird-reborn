'use strict';

module FlappyBird {

  export class Ground extends Phaser.TileSprite {

    constructor(game, x, y, width, height) {
      super(game, x, y, width, height, 'ground');

      this.autoScroll(-200, 0);

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
