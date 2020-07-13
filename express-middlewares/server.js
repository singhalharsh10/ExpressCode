const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'))


function decryptQueryParams(req, res, next) {

    // TODO: decrypt all query params as per our logic

    next()
}

function decodeQueryBase64(req, res, next) {
    for (let q in req.query) {
        // console.log(req.query[q])
        // below is th method to convert data into base64 in nodejs as atob and btoa function doesnot work in nodejs
        let data = req.query[q];
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data

    }
    next()
}

app.get('/eval', decryptQueryParams, decodeQueryBase64, (req, res) => {
    console.log(req.query)
        // eval function is a inbuilt function in JS to evaluate the code but it is not recomonded to take code as a inut from user as SQL injection can be done
    let y = eval(req.query.code)
    console.log(y)
    res.send('The Evaluated answer is ' + y)
})


//now we have to encrypt our encoded so that our user cant take the encoded code and decode it in the browser

app.listen(3000, () => {
    console.log("Server Has Started")
})