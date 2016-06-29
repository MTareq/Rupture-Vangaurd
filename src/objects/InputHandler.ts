///<reference="../../references.ts">
import BasicShip from './Ships.ts';
class Command {
    execute(playerShip: BasicShip, phys?: Phaser.Physics.Arcade){};
};

class ThrustCmd extends Command{
    execute(playerShip: BasicShip, phys: Phaser.Physics.Arcade){
        phys.accelerationFromRotation(playerShip.rotation, playerShip.acceleration, playerShip.body.acceleration);
    }
}
class TurnRightCmd extends Command{
    execute(playerShip: BasicShip){
        playerShip.body.angularVelocity = playerShip.angularVelocity;
    }
}
class TurnLeftCmd extends Command{
    execute(playerShip: BasicShip){
        playerShip.body.angularVelocity = -playerShip.angularVelocity;
    }
}
class StopTurnCmd extends Command{
    execute(playerShip: BasicShip){
        playerShip.body.angularVelocity = 0;
    }
}
class DeaccelerateCmd extends Command{
    execute(playerShip: BasicShip){
        playerShip.body.acceleration.set(0);
    }
}
class FireCmd extends Command{
    execute(playerShip: BasicShip){
        console.log('fire fire');
    }
}

class InputHandler {
    private Thrust: Command;
    private TurnRight: Command;
    private TurnLeft: Command;
    private StopTurn: Command;
    private deaccelerate: Command;
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
        this.StopTurn = new StopTurnCmd();
        this.deaccelerate = new DeaccelerateCmd();
    }
    handleInput(){
        if(this.KeyUp.isDown){ return this.Thrust }
        else if(this.KeyDown.isDown){ return this.Fire }
        else if(this.KeyRight.isDown){ return this.TurnRight }
        else if(this.KeyLeft.isDown){ return this.TurnLeft }
        else if(this.KeyUp.justUp){ return this.deaccelerate }
        else if(this.KeyRight.justUp){ return this.StopTurn }
        else if(this.KeyLeft.justUp){ return this.StopTurn }
        else { return null };
    }
};
export default InputHandler;
