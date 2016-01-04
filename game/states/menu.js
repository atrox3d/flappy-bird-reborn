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
            _super.call(this);
            console.log("menu");
        }
        Menu.prototype.preload = function () {
        };
        Menu.prototype.create = function () {
            this.background = this.game.add.sprite(0, 0, 'background');
        };
        Menu.prototype.update = function () {
        };
        return Menu;
    }(Phaser.State));
    FlappyBird.Menu = Menu;
})(FlappyBird || (FlappyBird = {}));
