// Lodash

// Lodash is to help you write more efficient, readable, and maintainable code
// by providing utility funtions that work consistently across different JS
// environments

// Note: will have to comment out certain lines of code to get this to work properly
// :)

// Importing lodash
// Ensure to use '_' to represent lodash, as its common convention.
const _ = require("lodash");

// Array
const myList = ["Water", "Chicken", "Banana", "Banana", "Cake", "Water"];

// Examples

// Chunk - will split the array into 'chunks' of size 3
// Will return [["Water", "Chicken", "Banana"], ["Banana", "Cake", "Water"]]
const myNewArray = _.chunk(myList, 3);

// Difference - will return the difference between two arrays
// Will return ["Chicken", "Cake"]
// const myNewArray = _.difference(myList, ["Water", "Banana"]);

// The opposite from above, will return whats left in the array
// Will return ["Water", "Banana", "Banana", "Water"]
// const myNewArray = _.difference(myList, ["Cake", "Chicken"]);

// Join -adds a seperator and convert to string
// Will return "Water-Chicken-Banana-Banana-Cake-Water"
// const myNewArray = _.join(myList, "-");

// Without - excludes specific value from the array
// Will return ["Chicken', "Banana", "Banana", "Cake"]
// const myNewArray = _.without(myList, "Water");

// Unique - will return the array with all the duplicates removed
// Will return ["Water", Chicken", "Banana", "Cake"]
// const myNewArray = _.uniq(myList);

console.log(myNewArray);
