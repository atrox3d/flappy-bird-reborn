'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Gameover = (function (_super) {
        __extends(Gameover, _super);
        function Gameover() {
            _super.apply(this, arguments);
        }
        Gameover.prototype.preload = function () {
        };
        Gameover.prototype.create = function () {
            var style = { font: '65px Arial', fill: '#ffffff', align: 'center' };
            this.titleText = this.game.add.text(this.game.world.centerX, 100, 'Game Over!', style);
            this.titleText.anchor.setTo(0.5, 0.5);
            this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center' });
            this.congratsText.anchor.setTo(0.5, 0.5);
            this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center' });
            this.instructionText.anchor.setTo(0.5, 0.5);
        };
        Gameover.prototype.update = function () {
            if (this.game.input.activePointer.justPressed()) {
                this.game.state.start('play');
            }
        };
        return Gameover;
    }(Phaser.State));
    FlappyBird.Gameover = Gameover;
})(FlappyBird || (FlappyBird = {}));
