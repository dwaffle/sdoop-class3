import {Signal} from './class.signal'
import {Coax} from './class.coax'

export class Television{
    recieveSignal(signal:Signal){
        console.log(signal.code)
    }
}