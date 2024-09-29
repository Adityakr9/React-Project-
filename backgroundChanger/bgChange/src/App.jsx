import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor]=useState("#a28089")
  return (
   
    <>

      <div className='w-full h-screen duration-200' style={{background : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} class="btn btn-danger" style={{background : "red"}}>Red</button>
          <button onClick={() => setColor("green")} class="btn btn-success" style={{background : "green"}}>Green</button>
          <button onClick={() => setColor("yellow")} class="btn btn-warning" style={{background : "yellow"}}>Yellow</button>
          <button  onClick={() => setColor("blue")} class="btn btn-primary" style={{background : "blue"}}>Blue</button>
          <button  onClick={() => setColor("black")} class="btn btn-dark" style={{background : "black"}}>Black</button>
          <button  onClick={() => setColor("white")} class="btn btn-info" style={{background : "white"}}>White</button>
          <button  onClick={() => setColor("gray")} class="btn btn-secondary" style={{background : "gray"}}>Gray</button>
          <button  onClick={() => setColor("pink")} class="btn btn-pink" style={{background : "pink"}}>Pink</button>
          <button  onClick={() => setColor("orange")} class="btn btn-orange" style={{background : "orange"}}>Orange</button>


        </div>
      </div>

      </div>
    
      
    </>
  )
}

export default App
