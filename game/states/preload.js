'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlappyBird;
(function (FlappyBird) {
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            _super.apply(this, arguments);
        }
        Preload.prototype.super = function () {
            this['asset'] = null;
            this['ready'] = false;
        };
        Preload.prototype.preload = function () {
            this['asset'] = this.add.sprite(this.world.width / 2, this.world.height / 2, 'preloader');
            this['asset'].anchor.setTo(0.5, 0.5);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.load.setPreloadSprite(this['asset']);
            this.load.image('yeoman', 'assets/yeoman-logo.png');
        };
        Preload.prototype.create = function () {
            this['asset'].cropEnabled = false;
        };
        Preload.prototype.update = function () {
            if (!!this['ready']) {
                this.game.state.start('menu');
            }
        };
        Preload.prototype.onLoadComplete = function () {
            this['ready'] = true;
        };
        return Preload;
    }(Phaser.State));
    FlappyBird.Preload = Preload;
})(FlappyBird || (FlappyBird = {}));
