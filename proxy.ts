// structural pattern - proxy === substitute
// replace target object with a proxy
// reactivity system in Vue.js is a good example

const original = { name: 'jeff' };

const reactive = new Proxy(original, {
    get(target, key){
        console.log(`Tracking: `, key);
        return target[key];
    },
    set(target, key, value){
        console.log(`Updating UI...`);
        return Reflect.set(target,key, value);
    }
});

reactive.name;

reactive.name = 'bob';
