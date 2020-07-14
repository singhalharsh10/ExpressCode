// Server side rendering is ue=sed (if we donot have JS enabled in our browswer ten we can dynamically send html from server to user)

const express = require('express')
const todoRoute = require('./routes/todo')

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
app.set('views', 'views')


app.use('/todos', todoRoute)

app.listen(3000, () => {
    console.log('Server has Started at 3000')
})