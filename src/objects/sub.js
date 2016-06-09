class BasicSub extends Phaser.Sprite{
    constructor(game, x, y, key, frame){
        super(game, x, y, key, frame)
        this.startX = 700 * 0.5;
        this.startY = 500 * 0.5;
        this.acceleration = 300;
        this.drag = 100;
        this.maxVelocity = 300;
        this.angularVelocity = 200;
		this.game.stage.addChild(this);
    };

}

export default BasicSub;
