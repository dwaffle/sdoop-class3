import { Signal } from "./class.signal";
import { Log } from "./class.log";

export class Room {

    static items:any[]=[];
    static log = new Log();

    static add( item:any ){
        if( !( item instanceof Signal )){
            
            this.items.push( item );

        } else {

            // do something with the signal
            this.items.forEach( nonSignalItem => {
                if( nonSignalItem.recieveSignal ){
                    this.log.write( item.code );
                    nonSignalItem.recieveSignal( item );
                }
            })

        }
    }
}