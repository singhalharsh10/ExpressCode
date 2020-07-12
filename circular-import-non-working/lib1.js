const lib2 = require('./lib2')

console.log(module.exports) //it is an empty object


module.exports = {
    a: 10,
    lib2
}