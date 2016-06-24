/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>
import BasicSub from '../objects/entity.ts'

const gfxAssets = {
    sub: {URL: 'assets/base-sub.png', name: 'sub'},
    torp: {URL: 'assets/base-torp.png', name: 'torp'}
};

class GameState extends Phaser.State {

    preload() {
        this.load.image(gfxAssets.sub.name, gfxAssets.sub.URL);
    }
	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let sub = new BasicSub(this.game, center.x, center.y, 'sub', null);
        let debug = new Phaser.Utils.Debug(this.game)
		sub.anchor.set(0.5, 0.5);
        //TODO control, events, movment handler
	}
    update(){
    }

}

export default GameState;
