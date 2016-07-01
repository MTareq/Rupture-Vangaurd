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
        this.startX = this.game.world.centerX; 
        this.startY = this.game.world.centerY;
        this.acceleration = 30;
        this.drag = 100;
        this.maxVelocity = 50;
        this.angularVelocity = 30;
        this.anchor.set(0.5, 0.5);
        this.angle = -90;
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.drag.set(this.drag);
        this.body.maxVelocity.set(this.maxVelocity);
		game.stage.addChild(this);
        this.body.collideWorldBounds = true;
    };

}
export default BasicShip;
