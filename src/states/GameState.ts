/// <reference path="../../references.ts"/>
import BasicShip from '../objects/Ships.ts'
import InputHandler from '../objects/InputHandler.ts'

const gfxAssets = {
    ship: {URL: 'assets/base-sub.png', name: 'ship'},
    bg: {URL: 'assets/debug-grid-1920x1920.png', name: 'bg'},
    torp: {URL: 'assets/base-torp.png', name: 'torp'}
};

class GameState extends Phaser.State {

    playerShip: BasicShip;
    background: Phaser.TileSprite;
    playerInputHandler: InputHandler;
    phys: Phaser.Physics.Arcade;

    preload() {
        this.load.image(gfxAssets.ship.name, gfxAssets.ship.URL);
        this.load.image(gfxAssets.bg.name, gfxAssets.bg.URL);
    }
	create() {
        //TODO camera, world wrap, mouse pinter, move towards
        let debug = new Phaser.Utils.Debug(this.game)
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
        this.background = this.game.add.tileSprite(center.x, center.y, 1920, 1920, 'bg');
        this.game.world.setBounds(center.x, center.y, 1920, 1920);
        this.playerInputHandler = new InputHandler(this.game);
		this.playerShip = new BasicShip(this.game, center.x, center.y, 'ship', null);
		this.playerShip.anchor.set(0.5, 0.5);
        this.camera.follow(this.playerShip)
        this.phys = this.game.physics.arcade;
	}
    update(){
        let command = this.playerInputHandler.handleInput();
        if(command){ command.execute(this.playerShip, this.phys) }
    }
    render(){
    }

}

export default GameState;
