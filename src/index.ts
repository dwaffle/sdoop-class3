import prompt from 'prompt';
import {Room} from './classes/class.room'
import {Remote} from './classes/class.remote'
import { release } from 'os';

const remote = new Remote();
Room.items.push(remote);
prompt.start();

function listenForButtonInput(){
    prompt.get([{
        name: 'button',
        description: 'Press or Release Button',
        type: 'string',
        required: true
    }], (err:any, result:any) => {
        if(!err){
            //This is where we start interacting with the Remote.
            const touchedButton = remote.buttons.find(button => button.emblem === result.button)
            if(touchedButton.isPressed){
                touchedButton.release()
            } else {
                touchedButton.press()
            }
            listenForButtonInput();
        }
    })
}

listenForButtonInput();