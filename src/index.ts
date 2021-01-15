import prompt from 'prompt';
import { Room } from './classes/class.room';
import { Remote } from './classes/class.remote';
import {Television} from './classes/class.television'
import { Coax } from './classes/class.coax';

const coax = new Coax();
const remote = new Remote();
const TV = new Television(coax);
Room.add(remote);
Room.add(TV)

prompt.start();

function listenForButtonInput(){
    prompt.get([{
        name: 'button',
        description: 'Press or Release Button',
        type: 'string',
        required: true
    }], (err:any, result:any) => {
        if(!err){
            
            let interaction = "click";
            switch(result.button[0]){
                case ">": 
                    result.button = result.button.substr(1);
                    interaction = "press";
                    break;
            }
            
            // this is where we start interacting with the remote
            const touchedButton = remote.buttons.find( button => button.emblem === result.button );

            if(touchedButton){
                switch(true){
                    case touchedButton.isPressed: touchedButton.release(); break;
                    case interaction === "press": touchedButton.press(); break;
                    case interaction === "click": touchedButton.click(); break;
                }
            }

            listenForButtonInput();
        }
    })
}

listenForButtonInput();