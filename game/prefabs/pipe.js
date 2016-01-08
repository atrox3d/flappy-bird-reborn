'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Pipe = (function (_super) {
        __extends(Pipe, _super);
        function Pipe(game, x, y, frame) {
            _super.call(this, game, x, y, x, y, 'pipe', frame);
            this.game.physics.arcade.enableBody(this);
            this.body.allowGravity = false;
            this.body.immovable = true;
        }
        Pipe.prototype.update = function () {
        };
        return Pipe;
    }(Phaser.TileSprite));
    FlappyBird.Pipe = Pipe;
})(FlappyBird || (FlappyBird = {}));
