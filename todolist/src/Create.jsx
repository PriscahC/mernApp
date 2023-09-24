import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('https://mern-app-kzx4.onrender.com/add', {task: task})
        .then(result => {
          location.reload()   //to automatically reload
        })  //(for testing) .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  return (
    <div className='create_form'>
        <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create