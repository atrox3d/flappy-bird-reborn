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
        Play.prototype.create = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.sprite = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'yeoman');
            this.sprite.inputEnabled = true;
            this.game.physics.arcade.enable(this['sprite']);
            this.sprite.body.collideWorldBounds = true;
            this.sprite.body.bounce.setTo(1, 1);
            this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500, 500);
            this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500, 500);
            this.sprite.events.onInputDown.add(this.clickListener, this);
        };
        Play.prototype.update = function () {
        };
        Play.prototype.clickListener = function () {
            this.game.state.start('gameover');
        };
        return Play;
    }(Phaser.State));
    FlappyBird.Play = Play;
})(FlappyBird || (FlappyBird = {}));
