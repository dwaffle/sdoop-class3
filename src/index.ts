import prompt from 'prompt';
import { Room } from './classes/class.room';
import { Remote } from './classes/class.remote';
import { Television } from './classes/class.television';

const remote = new Remote();
const tv = new Television();
Room.add(remote);
Room.add(tv);

prompt.start();

function listenForButtonInput(){
    prompt.get([{
        name: 'button',
        description: 'Press or Release Button',
        type: 'string',
        required: true
    }], (err:any, result:any) => {
        if(!err){
            
            let interaction:string = "click";
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