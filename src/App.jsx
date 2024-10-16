import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import './index.css'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

import { useEffect, useState } from 'react';
import ToDoForm from './components/ToDoForm';
import TaskColumns from './components/TaskColumns';

const oldTasks = localStorage.getItem("tasks")

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) //1st parameter is variable name & 2nd is array name
  }, [tasks])
   
  //Updates the isEditing value of the task
  const editTaskList = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, isEditing: !task.isEditing} : task
    ))
    // console.log(task.isEditing)
    console.log(tasks)

  }

  //updates Task
  const editTask = (updates, id) => {
    setTasks(tasks.map((todo) => 
      todo.id === id ? {...todo, ...updates, isEditing: !todo.isEditing} : todo
    ))
    console.log(tasks)
  }

  const handleDelete = (taskId) => {
    console.log(taskId)
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  const onDrop = (status, position) => {
    console.log(`${activeCard} is going to be placed into ${status} and at the ${position}`)
  
    if(activeCard === null || activeCard === undefined) return;
    
    const activeIndex = tasks.findIndex(task => task.id === activeCard)
    const taskToMove = tasks[activeIndex]
    const updatedTasks = tasks.filter((task) => task.id !== activeCard)

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    })

    setTasks(updatedTasks)
  }

  return (
    <div>
      <h1>To Do App</h1>
      <ToDoForm newTodo={setTasks} />
      <Container>
        <Row>
          <TaskColumns title='To Do' tasks={tasks} status="todo" handleDelete={handleDelete} handleEdit={editTaskList} editTask={editTask} setActiveCard={setActiveCard} onDrop={onDrop} />
          <TaskColumns title='In Progress' tasks={tasks} status="inprogress" handleDelete={handleDelete} handleEdit={editTaskList} editTask={editTask} setActiveCard={setActiveCard} onDrop={onDrop} />
          <TaskColumns title='Completed' tasks={tasks} status="completed" handleDelete={handleDelete} handleEdit={editTaskList} editTask={editTask} setActiveCard={setActiveCard} onDrop={onDrop} />
        </Row>
      </Container>
    </div>
  )
}

export default App
