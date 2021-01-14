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

//Have TV check items for Signals, then do something when a Signal is in there.
//Does releasing the button empty the button's Signal from items, or should that be the job of the TV?
//What happens if a button is pressed that the TV can't handle?
//