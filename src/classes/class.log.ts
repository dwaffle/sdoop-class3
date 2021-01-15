import fs from 'fs';

export class Log {

    private stream = fs.createWriteStream(`${__dirname}/../remote.txt`, { flags: 'a' });
    private timeout:any;

    constructor(){
        this.endWhenQuiet();
    }

    endWhenQuiet(){
        this.timeout = setTimeout(() => {
            this.stream.end();
            process.exit(0);
        }, 10000);
    }

    write( line:string ){
        clearTimeout(this.timeout);
        this.stream.write( line + "\n" );
        this.endWhenQuiet();
    }

}