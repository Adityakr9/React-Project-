import { useState } from 'react'
import './App.css'
import AddTodo from './componenets/AddTodo'
import Todos from './componenets/todos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App