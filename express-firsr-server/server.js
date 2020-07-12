const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello World')
})

app.use('/abc', express.static(__dirname + '/public')) //
    // app.use(express.static(__dirname + '/public')) // used much














app.listen(3000, () => {
    console.log('Server has started');
})