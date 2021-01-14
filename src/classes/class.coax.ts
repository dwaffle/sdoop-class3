export class Coax {

    channels:{
        [key:number]:string
    }={};
    
    constructor(){
        for( let x = 1; x < 100; x++ ){
            this.channels[x] = `Channel ${x}`;
        }
    }

}