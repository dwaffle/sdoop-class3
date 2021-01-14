import { Signal } from "./class.signal";
import { Coax } from './class.coax'

export class Television {
    volume:number
    channel:number = 1
    channelBuilder:number[] =[]
    protected interval:any

    constructor(public coax:Coax){
        coax.channels[this.channel]
    }

    recieveSignal( signal:Signal ){
        switch(signal.code){
            case "Volume Up":
                this.volumeUp()
                break;
            case "Volume Down":
                this.volumeDown()
                break;
            case "Channel Up":
                this.channelUp()
                break;
            case "Channel Down":
                this.channelDown()
                break;
            default:
                this.addNumber(Number(signal.code))
        }
        console.log(this.coax.channels[this.channel]);
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
        if(this.channel <= 99){
            this.channel++
        } else {
            this.channel--
        }
    }

    channelDown(){
        if(this.channel <= Number(this.coax.channels[0])){
            this.channel--;
        } else {
            this.channel = 99
        }
    }

    addNumber(codeNumber:number){
        this.interval = setTimeout(() => {
            if(this.channelBuilder.length < 2 ){
                this.channelBuilder.push(codeNumber)
            } else {
                this.changeChannel(this.channelBuilder);
                
                
            }
        }, 2000)
    }

    changeChannel(channelBuilder:number[]){
        clearTimeout(this.interval)
        if(this.channelBuilder.length === 1){
            this.channel = this.channelBuilder[0]
        } else {
            this.channel = (this.channelBuilder[0] * 10) + (this.channelBuilder[1])
            this.channelBuilder = this.channelBuilder.slice(0, this.channelBuilder.length)
        }
        console.log(this.channelBuilder);
    }
}