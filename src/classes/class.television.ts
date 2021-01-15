import { Signal } from "./class.signal";
import { Coax } from './class.coax'

export class Television {
    volume = 3
    channel = 1
    channelBuilder:number[] =[]
    protected interval:any

    constructor(public coax:Coax){
        coax.channels[this.channel]
        setInterval(interval => console.log(this.coax.channels[this.channel]), 1000);
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
                if(this.channelBuilder.length < 2){
                this.addNumber(Number(signal.code))
                } else{
                    this.changeChannel()
                    this.channelBuilder = [];
                }
                console.log("ChannelBuilder is " + this.channelBuilder)
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
    }

    changeChannel(){
        this.channel = (this.channelBuilder[0] * 10) + (this.channelBuilder[1])
        this.channelBuilder = []
    }
}