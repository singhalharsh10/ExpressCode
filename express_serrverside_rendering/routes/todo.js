const route = require('express').Router()

let todos = [
    { task: 'This is some task' },
    { task: 'This is another task' }
]

route.get('/', function(req, res) {
    res.render('todo', { todos })
})

route.post('/', function(req, res) {
    console.log(req.body.newtask)
    todos.push({
        task: req.body.newtask
    })
    res.redirect('todos') //. means same path
})

module.exports = route