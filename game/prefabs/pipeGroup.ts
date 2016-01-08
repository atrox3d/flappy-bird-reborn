'use strict';

module FlappyBird {

  export class PipeGroup extends Phaser.Group {
    topPipe:FlappyBird.Pipe;
    bottomPipe:FlappyBird.Pipe;
    hasScored:boolean;

    constructor(game, parent?) {
      super(game, parent);

      this.topPipe = new FlappyBird.Pipe(this.game, 0, 0, 0);
      this.add(this.topPipe);

      this.bottomPipe = new FlappyBird.Pipe(this.game, 0, 440, 1);
      this.add(this.bottomPipe);
      this.hasScored = false;

      this.topPipe.body.velocity.x = -200;
      this.bottomPipe.body.velocity.x = -200;
    }

    update() {
    // write your prefab's specific update code here
    }
  }
}
// module.exports = Bird;
