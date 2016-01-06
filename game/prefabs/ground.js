'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Ground = (function (_super) {
        __extends(Ground, _super);
        function Ground(game, x, y, width, height) {
            _super.call(this, game, x, y, width, height, 'ground');
        }
        Ground.prototype.update = function () {
        };
        return Ground;
    }(Phaser.TileSprite));
    FlappyBird.Ground = Ground;
})(FlappyBird || (FlappyBird = {}));
