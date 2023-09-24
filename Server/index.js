const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
const mongodb = import.meta.env.VITE_Mongo_URL;
// In Vite, environment variables are accessed using import.meta.env and the VITE_ prefix.

const app = express()
app.use(cors())
app.use(express.json())

// database
mongoose.connect(`${mongodb}`)


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


const port = process.env.PORT || 10000; // Use the PORT environment variable if available, or use port 3000 by default

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.listen(3001, () => {
//     console.log("Server is Running")
// })
