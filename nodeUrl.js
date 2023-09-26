// All about URL...

// The URL module provides utilities for working with URLs.
// URL module splits up a web address into readable parts
// To include URL module, use the require() method
// Accessed by using: const url = require('url');

// Examples:

// Splitting a URL into readable parts:
var url = require("url");
var adr = "http://localhost:8000/default.htm?year=2023&month=september";
var q = url.parse(adr, true);

// returns 'localhost:8000'
console.log(q.host);

// returns 'default.htm'
console.log(q.pathname);

// returns '?year=2023&month=september'
console.log(q.search);

// returns an object: { 'year': '2023', 'month': 'september'}
console.log(q.query);

// returns 'september'
console.log(q.query.month);
