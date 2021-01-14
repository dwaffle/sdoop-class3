import { Signal } from "./class.signal";

export class Room {

    static items:any[]=[];

    static add( item:any ){
        if( !( item instanceof Signal )){
            
            this.items.push( item );

        } else {

            // do something with the signal
            this.items.forEach( nonSignalItem => {
                if( nonSignalItem.recieveSignal ){
                    nonSignalItem.recieveSignal( item );
                }
            })

        }
    }

}