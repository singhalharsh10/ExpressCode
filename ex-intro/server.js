const express = require('express')
console.log(typeof express)

//app is application
const app = express()

// it is a middleware that runs before blow code
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});


//req.url -tells the specified url
//req.headers-tells about various encoding and etc thing
//req.query->return empty object
//req.query?a=10->return object containg a=10

app.get('/greet', (req, res) => {
    let person = 'Guest'
    if (req.query.person)
        person = req.query.person

    res.send('Good Morning  ' + person)
});




app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/files/index.html')
})


//Handling url params
//the text just after semicolon and before / becomes variable .Here city is vaiable which means if we search /anytext/welcome it will always show body of this
app.get('/:city/welcome', (req, res) => {
    // res.send('Welcome to the City')
    res.send('Welcome to ' + req.params.city + '!')
})

// For multiple Parameters
app.get('/:city/:welcome', (req, res) => {
    res.send(req.params.welcome + ' to the ' + req.params.city)
})

//though below and above are different but above is executed always .So we should never made function using 2 params as 1 one always executed first
app.get('/:person/:action', (req, res) => {
    res.send('Thank you ' + req.params.person + ' for ' + req.params.action)
})


app.post('/greet', (req, res) => {
    let person = 'Guest'
    console.log(req.body)
    if (req.body.person)
        person = req.body.person

    res.send('Good Evening  ' + person)
});



// 0-1024 are reserved ports
app.listen(3000, () => {
    console.log('Server started on localhost 3000')
})