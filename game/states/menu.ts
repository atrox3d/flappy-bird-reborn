
'use strict';
module FlappyBird {

  export class Menu extends Phaser.State {

    // sprite: Phaser.Sprite;
    // titleText: Phaser.Text;
    // instructionsText: Phaser.Text;
    background: Phaser.Sprite;
    ground: Phaser.TileSprite;
    titleGroup: Phaser.Group;
    title: Phaser.Sprite;
    bird: Phaser.Sprite;

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

        this.titleGroup = this.game.add.group();

        this.title = this.game.add.sprite(0, 0, 'title');
        this.titleGroup.add(this.title);

        this.bird = this.game.add.sprite(200, 5, 'bird');
        this.titleGroup.add(this.bird);

        this.bird.animations.add('flap');
        this.bird.animations.play('flap', 12, true);

        this.titleGroup.x = 30;
        this.titleGroup.y = 0;

        this.game.add.tween(this.titleGroup).to(
            {y:15},
            350,
            Phaser.Easing.Linear.None,
            true,
            0,
            1000,
            true);
      }

      update() {
        }
      }
    }
  }


//module.exports = Menu;
