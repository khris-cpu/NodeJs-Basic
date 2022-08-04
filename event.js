let fs = require('fs');
let rs = fs.createReadStream('./demo.txt');
let events = require('events');
let eventEmitter = new events.EventEmitter();

//Craete an Evenet hadler;

let myEventHandler = () => {
    console.log('I Hear my Voice');
}

//Assign the Event handler to an event
eventEmitter.on('sing' . myEventHandler);

eventEmitter.emit('sing');

// rs.on('open' , () => {
//     console.log('This file is open');
// })

