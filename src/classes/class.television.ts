import { Signal } from "./class.signal";
import { Coax } from './class.coax'

export class Television {
    isOn = false;
    volume = 3
    channel = 1
    channelBuilder:number[] =[]
    protected interval:any

    constructor(public coax:Coax){
        coax.channels[this.channel]
        setInterval(interval => console.log(this.coax.channels[this.channel]), 4000);
    }

    recieveSignal( signal:Signal ){
        switch(signal.code){
            case "POWER":
                this.isOn = !this.isOn
                break;
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
        console.log("Volume is now " + this.volume)
    }

    volumeDown(){
        if(this.volume > 0){
            
            this.volume--;
        }
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
        this.channelBuilder.push(codeNumber)
        if(this.channelBuilder.length === 2){
            this.changeChannel()
        }
    }

    changeChannel(){
        this.channel = (this.channelBuilder[0] * 10) + (this.channelBuilder[1])
        this.channelBuilder = []
    }
}