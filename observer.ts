/*  one-to-many 
    push-based-system
    allows many objects to subscribe to events
    emitted from another object */

import { Subject } from 'rxjs';

const news = new Subject();

// subject will keep track of subscriptions
// and call callback funcs whenever data changes
const tv1 = news.subscribe(v => console.log(`${v} via Den TV`));
const tv2 = news.subscribe(v => console.log(`${v} via Batcave TV`));
const tv3 = news.subscribe(v => console.log(`${v} via Airport TV`));

// broadcast
news.next('Breaking news: ');
news.next('The war is over ');