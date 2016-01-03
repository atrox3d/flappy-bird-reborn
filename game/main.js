'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            console.log("game");
            _super.call(this, 288, 505, Phaser.AUTO, 'flappy-bird-reborn');
            this.state.add('boot', FlappyBird.Boot, false);
            this.state.add('gameover', FlappyBird.Gameover, false);
            this.state.add('menu', FlappyBird.Menu, false);
            this.state.add('play', FlappyBird.Play, false);
            this.state.add('preload', FlappyBird.Preload, false);
            console.log(this.state.states);
            this.state.start('boot');
        }
        return Game;
    }(Phaser.Game));
    FlappyBird.Game = Game;
})(FlappyBird || (FlappyBird = {}));
window.onload = function () {
    var game = new FlappyBird.Game();
};
