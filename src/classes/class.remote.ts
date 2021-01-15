import { Room } from "./class.room";
import { Signal } from "./class.signal";

export class Remote {

    buttons:Button[];
    private dispatcher = new InfraredDispatcher();

    constructor(){
        const buttons = ["1","2","3","4","5","6","7","8","9","0","Power","ChUp","ChDn","VUp","VDn"].map(btn => btn.toUpperCase());
        this.buttons = buttons.map( buttonLabel => new Button( buttonLabel, this ));
    }

    handleButtonPress( button:Button ){
        this.dispatcher.dispatch( button.emblem );
    }

}

class Button {

    material = "Rubber";
    isPressed = false;

    protected interval:any;

    constructor( readonly emblem:string, private remote:Remote ){
        
    }

    press(){
        this.isPressed = true;
        this.remote.handleButtonPress( this );

        this.interval = setInterval(() => {
            this.remote.handleButtonPress( this );
        }, 2000)
    }

    release(){
        this.isPressed = false;
        clearInterval(this.interval);
    }

    click(){
        this.press();
        this.release();
    }

}

class InfraredDispatcher {

    dispatch( code:string ){
        new Signal( code );
    }

}

