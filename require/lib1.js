function sayHello(name) {
    console.log('Hello ' + name)
}

console.log(module.exports)

module.exports = {
    sayHello
}
console.log(module.exports)

setTimeout(() => {
    module.exports.omg = 'Wow'
}, 1000)