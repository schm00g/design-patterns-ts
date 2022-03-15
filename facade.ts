// structural pattern - simplified API to hide low level details
class PlumbingSystem {
    setPressure(v: number){}
    turnOn(){}
    turnOff(){}
}

class ElectricalSystem {
    setVoltage(v: number){}
    turnOn(){}
    turnOff(){}
}

// simplified wrapper for end consumer

class House {
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems(){
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
    }

    public shutDown(){
        this.electrical.turnOff();
        this.plumbing.turnOff();
    }
}

// hide the ugly details
const client = new House();
client.turnOnSystems();
client.shutDown();