var events = require('events');

var EventEmitter = new events.EventEmitter();

var userConnect = function (user) {
    console.log(user + " connected");
}
EventEmitter.on('connect', userConnect);

var userDisconnect = function (user) {
    console.log(user + " disconnected");
}
EventEmitter.on('disconnect', userDisconnect);

EventEmitter.on('message', function (messageDetails) {
    console.log(messageDetails.name + ":" + messageDetails.message);
})

EventEmitter.emit('connect', "rajesh");
EventEmitter.emit('message', { name: "rajesh", message: "Hello! how are you doing" })
EventEmitter.emit("disconnect", "rajesh");


