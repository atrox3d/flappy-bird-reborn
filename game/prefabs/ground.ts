'use strict';

module FlappyBird {

  export class Ground extends Phaser.TileSprite {

    constructor(game, x, y, width, height) {
      super(game, x, y, width, height, 'ground');
    }

    update() {
    // write your prefab's specific update code here
    }
  }
}
// module.exports = Bird;
