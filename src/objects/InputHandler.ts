///<reference="../../references.ts">
import BasicShip from './Ships.ts';
class Command {
    execute(playerShip: BasicShip){};
};

class ThrustCmd extends Command{
    execute(PlayerShip: BasicShip){
        console.log('ahead');
    }
}
class TurnRightCmd extends Command{
    execute(PlayerShip: BasicShip){
        console.log('right');
    }
}
class TurnLeftCmd extends Command{
    execute(PlayerShip: BasicShip){
        console.log('left');
    }
}
class FireCmd extends Command{
    execute(PlayerShip: BasicShip){
        console.log('fire fire');
    }
}

class InputHandler {
    private Thrust: Command;
    private TurnRight: Command;
    private TurnLeft: Command;
    private Fire: Command;
    private KeyUp;
    private KeyDown;
    private KeyRight;
    private KeyLeft;
    constructor(game: Phaser.Game){
        this.KeyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.KeyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.KeyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.KeyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.Thrust = new ThrustCmd();
        this.Fire = new FireCmd();
        this.TurnRight = new TurnRightCmd();
        this.TurnLeft = new TurnLeftCmd();
    }
    handleInput(){
        if(this.KeyUp.isDown){ return this.Thrust }
        else if(this.KeyDown.isDown){ return this.Fire }
        else if(this.KeyRight.isDown){ return this.TurnRight }
        else if(this.KeyLeft.isDown){ return this.TurnLeft }
        else { return null };
    }
};
export default InputHandler;
