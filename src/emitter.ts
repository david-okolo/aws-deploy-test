import { EventEmitter } from "events";

class Singleton
{

    static instance: Singleton;

    private singletonEmitter: EventEmitter;

    private data: Array<string> = [];

    private constructor()
    {
        
    }

    static getInstance(): Singleton
    {
        if(!this.instance)
        {
            this.instance = new Singleton();
        }

        return this.instance;
    }

    addData(_data: string):Boolean
    {
        this.data.push(_data)
        console.log(`Added: ${_data}`)
        return true
    }

    pushNotification(_event: string): void
    {
        this.singletonEmitter.emit(_event)
    }

    addEventListener(_event: string, listener: any)
    {
        this.singletonEmitter.addListener(_event, listener)
    }
}

const mySingleton: Singleton = Singleton.getInstance();

Object.freeze(mySingleton);

export default mySingleton;