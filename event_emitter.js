const EventEmitter = require('events');

const customEmitter = new EventEmitter();
//on-> listen for event
customEmitter.on('response',(name,id)=>{
    console.log(`data recieved for name: ${name},id: ${id}`);
})
//emit an event
customEmitter.emit('response','Vibhu',06)