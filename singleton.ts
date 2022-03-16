class Settings {
    static instance: Settings;
    public readonly mode = 'dark';
    
    // prevent new with private instructor
    private constructor(){

    } 

    static getInstance(): Settings {
        if(!Settings.instance){
            // only possible to create one
            Settings.instance = new Settings;
        }
        return Settings.instance;
    }
}

const settings = Settings.getInstance();
const settings1 = new Settings.getInstance(); // Only a void function can be called with the 'new' keyword

/*  In JS we use Object Literals
    always lean on in-built language feature before
    implementing a fancy design pattern

    const settings = {
        dark: 'true'
    }
*/