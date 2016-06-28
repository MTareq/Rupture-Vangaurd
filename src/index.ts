/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>
import GameState from './states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(window.outerWidth, window.outerHeight, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

new Game();
