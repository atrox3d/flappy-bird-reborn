
'use strict';
module FlappyBird {

  export class Preload extends Phaser.State {
    asset: Phaser.Sprite;
    ready: boolean;

  	constructor() {
      super();
      console.log("preload");
      this.asset = null;
      this.ready = false;
    }

    preload() {
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.asset = this.add.sprite(this.world.width/2,this.world.height/2, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);
      this.load.setPreloadSprite(this.asset);
      //this.load.image('yeoman', 'assets/yeoman-logo.png');

      this.load.image('background', 'assets/background.png');
      this.load.image('ground', 'assets/ground.png');
      this.load.image('title', 'assets/title.png');
      this.load.image('startButton', 'assets/start-button.png');

      this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
    }

    create() {
      this.asset.cropEnabled = false;
    }

    update() {
      if(!!this.ready) {
        this.game.state.start('menu');
      }
    }

    onLoadComplete() {
      this.ready = true;
    }
  }
}

// module.exports = Preload;
