import React, {useEffect, useState} from 'react'
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs';
import Create from './Create'
import axios from 'axios'

function Home() {
    const [todos, setTodos] = useState([])
    // render on our page
    useEffect(() => {
      axios.get('https://mern-app-kzx4.onrender.com/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
      axios.put('https://mern-app-kzx4.onrender.com/update/'+id)
      .then(result => {
        location.reload() //auto reloading
      }) //(for Testing) console.log(result)
      .catch(err => console.log(err))
    }

    // Delete item
    const handleDelete = (id) => {
      axios.delete('https://mern-app-kzx4.onrender.com/delete/'+id)
      .then(result => {
        location.reload() //auto reloading
      }) //(for Testing) console.log(result)
      .catch(err => console.log(err))
    }
  return (
    <div className='home'>
       <h2>To do List</h2> 
       <Create/>
       {
        todos.length === 0 ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
            <div className='task'>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {todo.done ?
                  <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                  : <BsCircleFill className='icon'/>
                }
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon' 
                onClick={() => handleDelete(todo._id)}/></span>
              </div>
            </div>
        ))
       }
    </div>
  )
}

export default Home
