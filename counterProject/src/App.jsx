import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setCounter]=useState(0); //hook hai ye iisko use kiye hai useState
   

    const addNum = () => {
        // if(counter != 20){
        //   setCounter(counter + 1);
        // }else{
        // return;
        // } 
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);   //not change any thing by counting of number is sequence..
        //if parameter have changed then it total change the answer..
      
    }

    const subNum = () =>{
      if(counter !=0){
        setCounter(counter - 1);
      }else{
        return;
      }
    }
  return (
    <>
      <div>
       <h1>Good morning Guy's ! How are you?</h1>
       <h2>Let's start th ecounter Project</h2>

        <h3>Counter : {counter}</h3>
       <button onClick={addNum}>counter Adding : {counter}</button><br /><br />
       <button onClick={subNum}>counter substact : {counter }</button>
      </div>
      
    </>
  )
}

export default App
