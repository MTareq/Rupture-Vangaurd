/// <reference path="../../references.ts"/>
class BasicShip extends Phaser.Sprite{
    startX: number;
    startY: number;
    acceleration: number;
    drag: number;
    maxVelocity: number;
    angularVelocity: number;

    constructor(game, x, y, key, frame){
        super(game, x, y, key, frame)
        this.startX = 700 * 0.5;
        this.startY = 500 * 0.5;
        this.acceleration = 300;
        this.drag = 100;
        this.maxVelocity = 300;
        this.angularVelocity = 200;
        this.anchor.set(0.5, 0.5);
        this.angle = -90;
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.drag.set(this.drag);
        this.body.maxVelocity.set(this.maxVelocity);
		game.stage.addChild(this);
    };

}
export default BasicShip;
