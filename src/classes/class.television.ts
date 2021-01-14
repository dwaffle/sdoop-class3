import { Signal } from "./class.signal";

export class Television {

    recieveSignal( signal:Signal ){
        console.log( signal.code );
    }

}