class HotDog {
    constructor(
        public bun: string,
        public ketchup: boolean,
        public mustard: boolean,
        public kraut: boolean,
    ) {}
}

const lunch = new HotDog('wheat', false, true, true);
console.log(lunch);

/* 
    with BUILDER PATTERN
    we create the object step-by-step
    using methods */ 

class Burger { 
    constructor(
        public bun: boolean,
        public ketchup: boolean,
        public pickles: boolean,
        public onion: boolean,
    ){}

    addBun(){
        this.bun = true;
        return this;
    }
    addKetchup(){
        this.ketchup = true;
        return this;
    }
    addPickles(){
        this.pickles = true;
        return this;
    }
    addOnion(){
        this.onion = false;
        return this;
    }
}

// ?
const dinner = new Burger(true, false, false, false);

// method chaining
dinner
    .addBun()
    .addKetchup()
    .addPickles()
    .addOnion();