
'use strict';
module FlappyBird {

  export class Menu extends Phaser.State {

    sprite: Phaser.Sprite;
    titleText: Phaser.Text;
    instructionsText: Phaser.Text;

      constructor() {
        super();
        console.log("menu");
      }

      create() {
        var style = { font: '65px Arial', fill: '#ffffff', align: 'center' };
        this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
        this.sprite.anchor.setTo(0.5, 0.5);

        this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center' });
        this.instructionsText.anchor.setTo(0.5, 0.5);

        this.sprite.angle = -20;
        this.game.add.tween(this.sprite).to({ angle: 20 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
      }

      update() {
        if (this.game.input.activePointer.justPressed()) {
          this.game.state.start('play');
        }
      }
    }
  }


//module.exports = Menu;
