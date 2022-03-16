// middle man or broker
class Airplane {
    land(){}
}

class Runway {
    clear: boolean;
}

// acts as the mediator
class Tower {
    clearForLanding(runway: Runway, plane: Airplane){
        if(runway.clear){
            console.log(`Plane ${plane} is clear for landing`);
        }
    }
}

// better to avoid many-to-many comms
const runway25A = new Runway();
const runway25B = new Runway();
const runway7 = new Runway();
const a = new Airplane();
const b = new Airplane();
const c = new Airplane();

/* 
    Express REQUEST MIDDLEWARE(mediator) & RESPONSE
*/