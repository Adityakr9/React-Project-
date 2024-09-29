import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';
function App() {
  
  return (
   
   <><h1 className='bg-green-400'>Hello Jee!! </h1>
      <Card username = "Aditya" btnClick="Explore"/>
      <Card username= "Nikhil"  />
   </>
  )

}

export default App
