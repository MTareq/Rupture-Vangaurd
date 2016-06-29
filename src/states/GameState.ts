/// <reference path="../../references.ts"/>
import BasicShip from '../objects/Ships.ts'
import InputHandler from '../objects/InputHandler.ts'

const gfxAssets = {
    ship: {URL: 'assets/base-sub.png', name: 'ship'},
    torp: {URL: 'assets/base-torp.png', name: 'torp'}
};

class GameState extends Phaser.State {

    playerShip: BasicShip;
    playerInputHandler: InputHandler;
    phys: Phaser.Physics.Arcade;

    preload() {
        this.load.image(gfxAssets.ship.name, gfxAssets.ship.URL);
    }
	create() {
        //TODO camera, world wrap, mouse pinter, move towards
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
        this.playerInputHandler = new InputHandler(this.game);
		this.playerShip = new BasicShip(this.game, center.x, center.y, 'ship', null);
        let debug = new Phaser.Utils.Debug(this.game)
		this.playerShip.anchor.set(0.5, 0.5);
        this.phys = this.game.physics.arcade;
	}
    update(){
        let command = this.playerInputHandler.handleInput();
        if(command){ command.execute(this.playerShip, this.phys) }
    }
    render(){
        this.game.debug.spriteInfo(this.playerShip, 32, 32);
        this.game.debug.text('angularVelocity: ' + this.playerShip.body.angularVelocity, 32, 200);
        this.game.debug.text('angularAcceleration: ' + this.playerShip.body.angularAcceleration, 32, 232);
        this.game.debug.text('angularDrag: ' + this.playerShip.body.angularDrag, 32, 264);
        this.game.debug.text('deltaZ: ' + this.playerShip.body.deltaZ(), 32, 296);
    }

}

export default GameState;
