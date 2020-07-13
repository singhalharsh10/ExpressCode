const express = require('express')
const app = express()

function m1(req, res, next) {
    console.log('running middlewares 1')
    next()
}

function m2(req, res, next) {
    console.log('running middlewares 2')
    next()
}

function m3(req, res, next) {
    console.log('running middlewares 3')
    next()
}


function m4(req, res, next) {
    console.log('running middlewares 4')
    next()
}


function m5(req, res, next) {
    console.log('running middlewares 5')
    next()
}


// miiddleware memory khate h
app.get('/hello', m2, m3, (req, res) => { //second argument k aage wale saare middleware hote h
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log("Server Has Started")
})