import { Signal } from "./class.signal";
import { Coax } from './class.coax'
import {Log} from './class.log'
import { timeStamp } from "console";

export class Television {
    isOn = false;
    volume = 3
    channel = 1
    channelBuilder:number[] =[]
    protected interval:any
    log = new Log;
    timeout:any;

    constructor(public coax:Coax){
        coax.channels[this.channel]
        
        setInterval(interval => {
            
        this.log.write(coax.channels[this.channel])
        console.log(coax.channels[this.channel])
        }, 1000);
    }

    recieveSignal( signal:Signal ){
        switch(signal.code){
            case "POWER":
                this.isOn = !this.isOn
            case "VUP":
                this.volumeUp()
                break;
            case "VDN":
                this.volumeDown()
                break;
            case "CHUP":
                this.channelUp()
                break;
            case "CHDN":
                this.channelDown()
                break;
            default:
                this.addNumber(Number(signal.code))
                
                break;
        }

        
    }

    volumeUp(){
        if(this.volume < 50){
            
            this.volume++;
        }
        this.log.write("Volume is now " + this.volume)
        console.log("Volume is now " + this.volume)
    }

    volumeDown(){
        if(this.volume > 0){
            this.volume--;
        }
        this.log.write("Volume is now " + this.volume)
        console.log("Volume is now " + this.volume)
    }

    channelUp(){
        if(this.channel < 99){
            this.channel++
        } else {
            this.channel = 1
        }
    }

    channelDown(){
        if(this.channel > 1){
            this.channel--;
        } else {
            this.channel = 99
        }
    }

    addNumber(codeNumber:number){
        this.timeout = setTimeout(() => {
            if(this.channelBuilder[0] && !this.channelBuilder[1]){
            this.channelBuilder[0] = 0
            this.channelBuilder[1] = codeNumber
            this.changeChannel()
        }
        }, 2000)
        this.channelBuilder.push(codeNumber)
        if(this.channelBuilder.length === 2){
            this.changeChannel()
        }
    }

    changeChannel(){
        clearTimeout(this.timeout)
        this.channel = (this.channelBuilder[0] * 10) + (this.channelBuilder[1])
        this.channelBuilder = []
        
        this.log.write(this.coax.channels[this.channel])
    }
}