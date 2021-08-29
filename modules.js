// now we're importing this file into the modules file 
// const xyz = require('./people');
const { people, ages } = require('./people');

// console.log(xyz); // {} - requre() returns an empty object
console.log(people);
console.log(ages);

const os = require('os');

// console.log(os);
console.log(os.platform(), os.homedir());