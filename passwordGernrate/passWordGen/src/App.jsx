import { useState, useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNum] = useState(false);
  const [charAllow, setChar] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef=useRef(null);

  const passwordGenrator = useCallback(() => {
    let pass = ' ';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numAllow) str += '0123456789';
    if (charAllow) str += '(){}[]!@#$%^&*/?<>';
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length, numAllow, charAllow, setPassword]);

  const copyPasswordclipboard =() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password) 
  };

  //optimize when you use useCallback function then it optimize your solution that's set otherwise don't need to neccessary to use.
  // const copyPasswordclipboard = useCallback(() => {   //by use of useCallback to copy the the passord  
  //   passwordRef.current?.select();
  //   window.navigator.clipboard.writeText(password)      //window.nagivator.clipboard.writeText(password)
  // }, [password]);

  useEffect(() =>{
    passwordGenrator()
  },[length, charAllow, numAllow, passwordGenrator])

  return (
    <>


      <div className='bg-slate-600 w-full max-w-md  shadow-md px-4 my-7 mx-auto rounded-lg'>
        <h1 className='text-white text-center'>PASSWORD GENERATOR</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-5'>

          <input type="text" value={password}
            className='outline-none w-full py-1 px-3 text-black'
            placeholder='password' readOnly ref={passwordRef}/>

          <button type="button" id='copyBtn' class="btn btn-primary" onClick={copyPasswordclipboard } >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min="6" max="100" value={length} onChange={(e) => { setLength(e.target.value) }} />Length : {length}
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllow} id='numberInput' onChange={(e) => { setNum((prev) => !prev) }} />
            <label for="character"> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" value="number" defaultChecked={charAllow} id='charInput' onChange={(e) => { setChar((prev) => !prev) }} />
            <label for="number"> Character</label></div>


        </div>
      </div>
    </>
  )
}

export default App
