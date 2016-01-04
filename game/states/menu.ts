
'use strict';
module FlappyBird {

  export class Menu extends Phaser.State {

    // sprite: Phaser.Sprite;
    // titleText: Phaser.Text;
    // instructionsText: Phaser.Text;
    background: Phaser.Sprite;
    ground: Phaser.TileSprite;

      constructor() {
        super();
        console.log("menu");
      }

      preload() {
      }

      create() {
        this.background = this.game.add.sprite(0, 0, 'background');
        // add the ground sprite as a tile
        // and start scrolling in the negative x direction
        this.ground = this.game.add.tileSprite(0,400,335,112, 'ground');
        this.ground.autoScroll(-200, 0);
      }

      update() {
        }
      }
    }
  }


//module.exports = Menu;
