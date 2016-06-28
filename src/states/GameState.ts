/// <reference path="../../references.ts"/>
import BasicShip from '../objects/Ships.ts'
import InputHandler from '../objects/InputHandler.ts'

const gfxAssets = {
    sub: {URL: 'assets/base-sub.png', name: 'sub'},
    torp: {URL: 'assets/base-torp.png', name: 'torp'}
};

class GameState extends Phaser.State {

    playerShip: BasicShip;
    playerInputHandler: InputHandler;

    preload() {
        this.load.image(gfxAssets.sub.name, gfxAssets.sub.URL);
    }
	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
        this.playerInputHandler = new InputHandler(this.game);
		this.playerShip = new BasicShip(this.game, center.x, center.y, 'sub', null);
        let debug = new Phaser.Utils.Debug(this.game)
		this.playerShip.anchor.set(0.5, 0.5);
	}
    update(){
        let command = this.playerInputHandler.handleInput();
        if(command){ command.execute(this.playerShip) }
    }

}

export default GameState;
