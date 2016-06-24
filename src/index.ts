/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>
import GameState from './states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(700, 500, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

new Game();
