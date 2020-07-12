function sayHello(name) {
    console.log('Hello ' + name)
}

console.log(module.exports)

module.exports = { //it is an object containg function sAYhELLO
    sayHello
}
console.log(module.exports)

setTimeout(() => {
    module.exports.omg = 'Wow' //added to object as variables
}, 1000)