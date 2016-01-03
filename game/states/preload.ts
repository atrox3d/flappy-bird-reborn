
'use strict';
module FlappyBird {

  export class Preload extends Phaser.State {
  	super() {
      this['asset'] = null;
      this['ready'] = false;
    }

    preload() {
      this['asset'] = this.add.sprite(this.world.width/2,this.world.height/2, 'preloader');
      this['asset'].anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this['asset']);
      this.load.image('yeoman', 'assets/yeoman-logo.png');
    }

    create() {
      this['asset'].cropEnabled = false;
    }

    update() {
      if(!!this['ready']) {
        this.game.state.start('menu');
      }
    }

    onLoadComplete() {
      this['ready'] = true;
    }
  }
}

// module.exports = Preload;
