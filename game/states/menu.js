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
            this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
            this.ground.autoScroll(-200, 0);
            this.titleGroup = this.game.add.group();
            this.title = this.game.add.sprite(0, 0, 'title');
            this.titleGroup.add(this.title);
            this.bird = this.game.add.sprite(200, 5, 'bird');
            this.titleGroup.add(this.bird);
            this.bird.animations.add('flap');
            this.bird.animations.play('flap', 12, true);
            this.titleGroup.x = 30;
            this.titleGroup.y = 0;
            this.game.add.tween(this.titleGroup).to({ y: 15 }, 350, Phaser.Easing.Linear.None, true, 0, 1000, true);
        };
        Menu.prototype.update = function () {
        };
        return Menu;
    }(Phaser.State));
    FlappyBird.Menu = Menu;
})(FlappyBird || (FlappyBird = {}));
