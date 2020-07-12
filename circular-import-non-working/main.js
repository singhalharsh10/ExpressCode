// it can be lead to infinte recursion as reversible require of lib1 and lib2 .so it will end when it calls a object which has already called another like lib1 calls lib2 and lib2 calls lib1 and lib1 is undefined and already called so it is taken as khali object 

const lib1 = require('./lib1.js')
const lib2 = require('./lib2.js')

console.log(lib1)
console.log(lib2)

console.log(lib1.lib2)
console.log(lib2.lib1)

console.log(lib1.lib2.lib1)
console.log(lib2.lib1.lib2)