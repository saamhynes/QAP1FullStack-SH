// All about events..

// Node is perfect for event driven applications
// Every action on a computer is an event. Like when a connection is made or a file is opened.
// Objects in node can fire events, like the readstream object fires events when opening and closing a file

// Example
// var fs = require("fs");
// var rs = fs.createReadStream("./demofile.txt");
// rs.on("open", function () {
//   console.log("The file is open.");
// });

// Node has a built in module, called 'Events', where you can create-, fire-, and listen for- your events
// Use thre require() method to include built in events.
// All event properties and methods are an instance of an EventEmitter object.

// Create an eventEmitter obeject:
var events = require("events");
var EventEmitter = new events.EventEmitter();

// You can assign event handlers to your own events with event emittter object
// To fire an event, use 'emit()' method
var events = require("events");
var EventEmitter = new events.EventEmitter();

// Create event handler
var myEventHandler = function () {
  console.log(
    "I felt a great disturbance in the force, as if millions of voices suddenly cried out in terror and were suddenly silenced."
  );
};

// Assign event handler to an event:
EventEmitter.on("cried", myEventHandler);

// Fire the 'cried' event:
EventEmitter.emit("cried");
