const { myName: name, myHobbies, myAge } = require('./multiple-exports.js');
const { myName, myFriendName, myGreatHobbies } = require('./export-and-import');
const greatingFn = require('./my-modules/single-exports.js');
// const greatingFn = require('c:/Users/viach/Documents/IT_courses/Node.js/Node-Udemy/03-commojs-modules/single-exports.js');

console.log(name);
console.log(myHobbies);
console.log(myAge);

myHobbies.push('climbing');

greatingFn(name);

console.log(myFriendName);
console.log(myName);
console.log(myGreatHobbies);
