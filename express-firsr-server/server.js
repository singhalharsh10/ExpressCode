const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    let name = 'Guest'
    if (req.query.user)
        name = req.query.user
    res.send('Hello World ' + name)
})

app.use('/abc', express.static(__dirname + '/public')) //
    // app.use(express.static(__dirname + '/public')) // used much














app.listen(3000, () => {
    console.log('Server has started');
})