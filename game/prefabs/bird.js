'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Bird = (function (_super) {
        __extends(Bird, _super);
        function Bird(game, x, y, frame) {
            _super.call(this, game, x, y, 'bird', frame);
        }
        Bird.prototype.update = function () {
        };
        return Bird;
    }(Phaser.Sprite));
    FlappyBird.Bird = Bird;
})(FlappyBird || (FlappyBird = {}));
