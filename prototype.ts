export {};

// prototype
const zombie = {
    eatBrains(){
        return 'yum 🧠';
    }
}

// clone
const chad = Object.create(zombie, { name: { value: 'chad'}});

const results = [   
    chad,
    chad.eatBrains(),
    chad.__proto__, 
    Object.getPrototypeOf(chad)
];

results.forEach(x => console.log(x));

/*  JS moves up the prototype chain moving
    towards the root until int finds

    TypeScript considers any file with   
    import or export statements as a module. */