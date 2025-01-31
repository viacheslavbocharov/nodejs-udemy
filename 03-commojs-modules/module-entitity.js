console.log(arguments.callee.toString())

const myName =  'Slava'
const myLastname = 'Bocharov'

module.exports.myName = myName
exports.myLastname = myLastname

console.log(module)
console.log(exports)
console.log(module.exports)
console.log(module.exports === exports)
console.log(__filename)
console.log(__dirname)
// console.log(require)
