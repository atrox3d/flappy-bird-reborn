
'use strict';
module FlappyBird {

  export class Play extends Phaser.State {
    background: Phaser.Sprite;
    bird:FlappyBird.Bird;
    ground:Phaser.TileSprite;
    flapKey:Phaser.Key;
    pipeGenerator: Phaser.TimerEvent;

    generatePipes() {
      var pipeY = this.game.rnd.integerInRange(-100, 100);
      var pipeGroup = new FlappyBird.PipeGroup(this.game);

      pipeGroup.x = this.game.width;
      pipeGroup.y = pipeY;

      var now = new Date();
      var timestamp = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      console.log(
          timestamp,
          "generatePipes",
          "pipeGroup.x",
          pipeGroup.x,
          "pipeGroup.y",
          pipeGroup.y
      );
    }


    create() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y=500;

      this.background = this.game.add.sprite(0, 0, 'background');

      this.bird = new FlappyBird.Bird(this.game, 100, this.game.height/2);
      this.game.add.existing(this.bird);

      this.ground = new FlappyBird.Ground(this.game, 0, 400, 335, 112);
      this.game.add.existing(this.ground);

      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

      this.flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      this.flapKey.onDown.add(this.bird.flap, this.bird);
      this.input.onDown.add(this.bird.flap, this.bird);

      this.pipeGenerator = this.game.time.events.loop(
        Phaser.Timer.SECOND * 1.25,
        this.generatePipes,
        this
      );

      this.pipeGenerator.timer.start();
    }

    update() {
      this.game.physics.arcade.collide(this.bird, this.ground);
    }

    clickListener() {
    }
  }
}
  // module.exports = Play;