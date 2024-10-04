import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Proflie'
import UserContextProvider from './Context/userContextProvider'

function App() {

  return (
    <UserContextProvider>
     <h1>React with react-context</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
