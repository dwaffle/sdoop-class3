import { Room } from "./class.room";

export class Remote {

    buttons:Button[];
    private dispatcher = new InfraredDispatcher();

    constructor(){
        const buttons = ["1","2","3","4","5","6","7","8","9","0","Power","Channel Up","Channel Down","Volume Up","Volume Down"];
        this.buttons = buttons.map( buttonLabel => new Button( buttonLabel, this ));
    }

    handleButtonPress( button:Button ){
        this.dispatcher.dispatch( button.emblem );
    }

}

class Button {

    material:string = "Rubber";
    isPressed:boolean = false;

    protected interval:any;

    constructor( readonly emblem:string, private remote:Remote ){
        
    }

    press(){
        this.isPressed = true;

        this.interval = setInterval(() => {
            this.remote.handleButtonPress( this );
        }, 1000)
    }

    release(){
        this.isPressed = false;
        clearInterval(this.interval);
    }

}

class InfraredDispatcher {

    dispatch( code:string ){
        const signal = new Signal( code );
    }

}

class Signal {

    constructor( code:string ){
        console.log("Signal: ", code);
        Room.items.push(this);
    }

}