'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var PipeGroup = (function (_super) {
        __extends(PipeGroup, _super);
        function PipeGroup(game, parent) {
            _super.call(this, game, parent);
            this.topPipe = new FlappyBird.Pipe(this.game, 0, 0, 0);
            this.add(this.topPipe);
            this.bottomPipe = new FlappyBird.Pipe(this.game, 0, 440, 0);
            this.add(this.bottomPipe);
            this.hasScored = false;
        }
        PipeGroup.prototype.update = function () {
        };
        return PipeGroup;
    }(Phaser.Group));
    FlappyBird.PipeGroup = PipeGroup;
})(FlappyBird || (FlappyBird = {}));
