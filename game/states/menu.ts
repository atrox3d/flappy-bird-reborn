
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
    startButton: Phaser.Button;

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
        this.titleGroup.y = 100;

        this.game.add.tween(this.titleGroup).to(
            {y:115},                    // properties to tween
            350,                        // duration
            Phaser.Easing.Linear.None,  // ease
            true,                       // autostart
            0,                          // delay
            1000,                       // repeat
            true);                      // yoyo

        this.startButton = this.game.add.button(
          this.game.width/2,
          300,
          'startButton',
          this.startClick,
          this
        );

        this.startButton.anchor.setTo(0.5, 0.5);
      }

      startClick() {
        console.log("startClick!");
        this.game.state.start('play')
      }

      update() {
        }
      }
    }
  }


//module.exports = Menu;
