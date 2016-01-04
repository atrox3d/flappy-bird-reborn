'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
        }
        Menu.prototype.preload = function () {
        };
        Menu.prototype.create = function () {
            var style = { font: '65px Arial', fill: '#ffffff', align: 'center' };
            this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
            this.sprite.anchor.setTo(0.5, 0.5);
            this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
            this.titleText.anchor.setTo(0.5, 0.5);
            this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center' });
            this.instructionsText.anchor.setTo(0.5, 0.5);
            this.sprite.angle = -20;
            this.game.add.tween(this.sprite).to({ angle: 20 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        };
        Menu.prototype.update = function () {
            if (this.game.input.activePointer.justPressed()) {
                this.game.state.start('play');
            }
        };
        return Menu;
    }(Phaser.State));
    FlappyBird.Menu = Menu;
})(FlappyBird || (FlappyBird = {}));
