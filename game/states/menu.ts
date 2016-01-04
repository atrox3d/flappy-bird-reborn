
'use strict';
module FlappyBird {

  export class Menu extends Phaser.State {

    // sprite: Phaser.Sprite;
    // titleText: Phaser.Text;
    // instructionsText: Phaser.Text;
    background: Phaser.Sprite;

      constructor() {
        super();
        console.log("menu");
      }

      preload() {
      }

      create() {
        this.background = this.game.add.sprite(0, 0, 'background');
      }

      update() {
        }
      }
    }
  }


//module.exports = Menu;
