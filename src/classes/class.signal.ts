import { Room } from "./class.room";

export class Signal {

    constructor( public code:string ){
        Room.add(this);
    }

}