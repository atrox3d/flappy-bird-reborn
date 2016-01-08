'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.apply(this, arguments);
        }
        Play.prototype.generatePipes = function () {
            console.log(new Date(), "generatePipes");
        };
        Play.prototype.create = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = 500;
            this.background = this.game.add.sprite(0, 0, 'background');
            this.bird = new FlappyBird.Bird(this.game, 100, this.game.height / 2);
            this.game.add.existing(this.bird);
            this.ground = new FlappyBird.Ground(this.game, 0, 400, 335, 112);
            this.game.add.existing(this.ground);
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
            this.flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.flapKey.onDown.add(this.bird.flap, this.bird);
            this.input.onDown.add(this.bird.flap, this.bird);
            this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
            this.pipeGenerator.timer.start();
        };
        Play.prototype.update = function () {
            this.game.physics.arcade.collide(this.bird, this.ground);
        };
        Play.prototype.clickListener = function () {
        };
        return Play;
    }(Phaser.State));
    FlappyBird.Play = Play;
})(FlappyBird || (FlappyBird = {}));
