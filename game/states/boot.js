'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloader', 'assets/preloader.gif');
        };
        Boot.prototype.create = function () {
            this.game.input.maxPointers = 1;
            this.game.state.start('preload');
        };
        return Boot;
    }(Phaser.State));
    FlappyBird.Boot = Boot;
})(FlappyBird || (FlappyBird = {}));
