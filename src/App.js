// 1
import React from 'react'
import './App.scss'
// import './Todo.scss'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

function App() {
  // 2
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  )
}

export default App
