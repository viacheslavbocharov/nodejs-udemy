const myName = 'Slava';
const myHobbies = ['coding', 'skiing'];
const myAge = 36;

console.log('Text from Multiple-Export file');

exports.myName = myName;
module.exports.myHobbies = myHobbies;
module.exports.myAge = myAge;
