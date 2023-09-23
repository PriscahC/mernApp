const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

// database
mongoose.connect('mongodb+srv://DataVis:36652394@datavis.oxhgijj.mongodb.net/')


// render on page
app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// Editing tasks
app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    // console.log(id);  Test to view id on server
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// delete
app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    // console.log(id);  Test to view id on server
    TodoModel.findByIdAndDelete({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// connect to adding tasks
app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running")
})