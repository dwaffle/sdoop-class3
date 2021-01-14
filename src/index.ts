import prompt from 'prompt';

prompt.start();

function listenForButtonInput(){
    prompt.get([{
        name: 'button',
        description: 'Press or Release Button',
        type: 'string',
        required: true
    }], (err:any, result:any) => {
        if(!err){
            console.log( result.button );
            listenForButtonInput();
        }
    })
}

listenForButtonInput();