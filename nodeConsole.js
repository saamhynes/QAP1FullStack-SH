// All about the console..

// The node:console module provides a simple debugging cosole that is similar to the JS console mechanism privided by web browsers.
// It exports two specific components:
// 1. A console class with methods such as console.log(), console.erro(), and console.warn() that can be used to write any Node.js stream.
// A global console instance configured to write to process.stdout and process.stderr. The global console can be used without calling require('node:console').

//Examples:

// Prints: Rising moons! to the standard output
console.log("Rising moons!");

// Prints: Rising moons! to the standard output
console.log("Rising %s", "moons!");

// Prints error message and stack trace to the standard error
console.error(new Error("I have a bad feeling about this."));

// Prints: Be mindful of your thoughts, Anakin, they betray you.
const name = "Anakin";
console.warn("Be mindful of your thoughts, " + name + ", they betray you.");
