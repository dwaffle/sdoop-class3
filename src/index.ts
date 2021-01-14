import prompt from 'prompt';
import { Room } from './classes/class.room';
import { Remote } from './classes/class.remote';

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
            
            // this is where we start interacting with the remote
            const touchedButton = remote.buttons.find( button => button.emblem === result.button );

            if( touchedButton.isPressed ){
                touchedButton.release();
            } else {
                touchedButton.press();
            }

            listenForButtonInput();
        }
    })
}

listenForButtonInput();